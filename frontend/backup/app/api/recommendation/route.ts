import { type NextRequest, NextResponse } from "next/server"

// Cost calculation logic
const calculatePlanCost = (plan: any, avgUsage: any) => {
  const base = plan.monthly_price
  const overGb = Math.max(avgUsage.gb - plan.quota_gb, 0) * plan.overage_gb
  const overMin = Math.max(avgUsage.minutes - plan.quota_min, 0) * plan.overage_min
  const overSms = Math.max(avgUsage.sms - plan.quota_sms, 0) * plan.overage_sms

  return {
    base,
    over_gb: overGb,
    over_min: overMin,
    over_sms: overSms,
    total_cost: base + overGb + overMin + overSms,
  }
}

const mockPlans = [
  {
    plan_id: 1,
    plan_name: "GNÇ 10GB",
    type: "faturalı",
    quota_gb: 10,
    quota_min: 500,
    quota_sms: 100,
    monthly_price: 230,
    overage_gb: 25,
    overage_min: 0.5,
    overage_sms: 0.2,
  },
  {
    plan_id: 2,
    plan_name: "Platinum 30GB",
    type: "faturalı",
    quota_gb: 30,
    quota_min: 2000,
    quota_sms: 1000,
    monthly_price: 520,
    overage_gb: 20,
    overage_min: 0.3,
    overage_sms: 0.1,
  },
  {
    plan_id: 3,
    plan_name: "Bireysel 20GB",
    type: "faturalı",
    quota_gb: 20,
    quota_min: 1000,
    quota_sms: 500,
    monthly_price: 350,
    overage_gb: 22,
    overage_min: 0.4,
    overage_sms: 0.15,
  },
  {
    plan_id: 4,
    plan_name: "Faturasız 8GB",
    type: "faturasız",
    quota_gb: 8,
    quota_min: 400,
    quota_sms: 100,
    monthly_price: 180,
    overage_gb: 28,
    overage_min: 0.6,
    overage_sms: 0.25,
  },
  {
    plan_id: 5,
    plan_name: "Faturasız 15GB",
    type: "faturasız",
    quota_gb: 15,
    quota_min: 700,
    quota_sms: 200,
    monthly_price: 260,
    overage_gb: 24,
    overage_min: 0.5,
    overage_sms: 0.2,
  },
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { user_id, policy } = body

    // Mock average usage based on user_id
    const avgUsage = user_id === "1001" ? { gb: 7.8, minutes: 420, sms: 78 } : { gb: 12.5, minutes: 650, sms: 95 }

    // Calculate costs for all plans
    const recommendations = mockPlans.map((plan) => {
      const breakdown = calculatePlanCost(plan, avgUsage)
      return {
        plan_id: plan.plan_id,
        plan_name: plan.plan_name,
        type: plan.type,
        total_cost: breakdown.total_cost,
        breakdown,
      }
    })

    // Sort by total cost and get top 3
    const top3 = recommendations.sort((a, b) => a.total_cost - b.total_cost).slice(0, 3)

    const rationale = `Son 30 günlük ortalama ${avgUsage.gb}GB; en uygun planlar maliyet açısından sıralandı.`

    return NextResponse.json({
      user_id,
      top3,
      rationale,
    })
  } catch (error) {
    console.error("Error generating recommendations:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

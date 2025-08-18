import { NextResponse } from "next/server"

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

export async function GET() {
  try {
    return NextResponse.json(mockPlans)
  } catch (error) {
    console.error("Error fetching plans:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

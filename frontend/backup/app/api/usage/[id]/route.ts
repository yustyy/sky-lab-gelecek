import { type NextRequest, NextResponse } from "next/server"

// Mock usage data for the last 90 days
const generateMockUsageData = (userId: string, days = 90) => {
  const data = []
  const now = new Date()

  for (let i = days; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    // Generate realistic usage patterns
    const baseUsage = userId === "1001" ? { mb: 150, minutes: 15, sms: 2 } : { mb: 300, minutes: 25, sms: 3 }

    // Add some randomness and weekend patterns
    const isWeekend = date.getDay() === 0 || date.getDay() === 6
    const multiplier = isWeekend ? 1.5 : 1.0
    const randomFactor = 0.5 + Math.random()

    data.push({
      date: date.toISOString().split("T")[0],
      mb_used: Math.round(baseUsage.mb * multiplier * randomFactor),
      minutes_used: Math.round(baseUsage.minutes * multiplier * randomFactor),
      sms_used: Math.round(baseUsage.sms * randomFactor),
      roaming_mb: i < 5 && Math.random() > 0.8 ? Math.round(50 * Math.random()) : 0,
    })
  }

  return data
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const userId = params.id
    const { searchParams } = new URL(request.url)
    const days = Number.parseInt(searchParams.get("days") || "90")

    const usageData = generateMockUsageData(userId, days)

    return NextResponse.json(usageData)
  } catch (error) {
    console.error("Error fetching usage data:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

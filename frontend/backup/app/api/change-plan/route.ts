import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { user_id, new_plan_id } = body

    // Simulate plan change process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock successful response
    return NextResponse.json(
      {
        user_id,
        new_plan_id,
        status: "mocked-ok",
        message: "Plan değişikliği başarıyla simüle edildi",
        effective_date: new Date().toISOString(),
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error changing plan:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

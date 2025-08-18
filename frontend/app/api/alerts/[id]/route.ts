import { type NextRequest, NextResponse } from "next/server"

const mockAlerts = {
  "1001": [
    {
      id: "1",
      level: "warning",
      message: "İnternet kotanızın %85'i tükendi. Ay sonuna 12 gün kaldı.",
      created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
      read: false,
    },
    {
      id: "2",
      level: "info",
      message: "Bugünkü internet kullanımınız son 14 günün 2 katından fazla.",
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      read: false,
    },
    {
      id: "3",
      level: "success",
      message: "Bireysel 20GB paketine geçerek aylık ₺85 tasarruf edebilirsiniz.",
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
      read: true,
    },
  ],
  "1002": [
    {
      id: "4",
      level: "warning",
      message: "Konuşma kotanızın %70'i tükendi.",
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
      read: true,
    },
  ],
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const userId = params.id
    const alerts = mockAlerts[userId as keyof typeof mockAlerts] || []

    return NextResponse.json(alerts)
  } catch (error) {
    console.error("Error fetching alerts:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

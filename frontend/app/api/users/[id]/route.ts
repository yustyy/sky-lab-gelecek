import { type NextRequest, NextResponse } from "next/server"

// Mock user data - in production, this would come from your database
const mockUsers = {
  "1001": {
    user_id: "1001",
    name: "Ahmet Yılmaz",
    current_plan: {
      id: 4,
      name: "Faturasız 8GB",
      type: "faturasız",
      quota_gb: 8,
      quota_min: 400,
      quota_sms: 100,
      monthly_price: 180,
    },
    type: "faturasız",
  },
  "1002": {
    user_id: "1002",
    name: "Aylin Demir",
    current_plan: {
      id: 1,
      name: "GNÇ 10GB",
      type: "faturalı",
      quota_gb: 10,
      quota_min: 500,
      quota_sms: 100,
      monthly_price: 230,
    },
    type: "faturalı",
  },
  "1003": {
    user_id: "1003",
    name: "Mehmet Kaya",
    current_plan: {
      id: 2,
      name: "Platinum 30GB",
      type: "faturalı",
      quota_gb: 30,
      quota_min: 2000,
      quota_sms: 1000,
      monthly_price: 520,
    },
    type: "faturalı",
  },
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const userId = params.id
    const user = mockUsers[userId as keyof typeof mockUsers]

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error("Error fetching user:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

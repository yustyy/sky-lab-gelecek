import { type NextRequest, NextResponse } from "next/server"

const mockAddons = [
  { addon_id: 101, name: "Ek 5GB", type: "data", extra_gb: 5, price: 75 },
  { addon_id: 102, name: "Ek 100DK", type: "voice", extra_min: 100, price: 35 },
  { addon_id: 103, name: "Ek 250SMS", type: "sms", extra_sms: 250, price: 25 },
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { user_id, addon_ids } = body

    // Calculate new estimated cost
    const selectedAddons = mockAddons.filter((addon) => addon_ids.includes(addon.addon_id))

    const totalAddonCost = selectedAddons.reduce((sum, addon) => sum + addon.price, 0)
    const newEstimatedCost = 287.5 + totalAddonCost // Base cost + addons

    // Simulate top-up process
    await new Promise((resolve) => setTimeout(resolve, 800))

    return NextResponse.json(
      {
        user_id,
        addons: selectedAddons,
        new_estimated_cost: newEstimatedCost,
        status: "success",
        message: "Ek paket başarıyla eklendi",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error processing top-up:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

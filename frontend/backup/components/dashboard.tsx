"use client"

import { UsageOverview } from "@/components/usage-overview"
import { CostPrediction } from "@/components/cost-prediction"
import { PlanRecommendations } from "@/components/plan-recommendations"
import { AlertsPanel } from "@/components/alerts-panel"
import { UserProfile } from "@/components/user-profile"

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <UserProfile />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <UsageOverview />
        </div>
        <div>
          <AlertsPanel />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <CostPrediction />
        <PlanRecommendations />
      </div>
    </div>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react"

const costData = [
  { month: "Eki", actual: 180, predicted: 185 },
  { month: "Kas", actual: 220, predicted: 215 },
  { month: "Ara", actual: 195, predicted: 200 },
  { month: "Oca", actual: 0, predicted: 287 },
]

export function CostPrediction() {
  const currentMonthPrediction = 287.5
  const lastMonthActual = 195
  const difference = currentMonthPrediction - lastMonthActual
  const percentageChange = (difference / lastMonthActual) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Maliyet Tahmini
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="text-sm text-muted-foreground">Bu Ay Tahmini</p>
              <p className="text-2xl font-bold">₺{currentMonthPrediction}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                {difference > 0 ? (
                  <TrendingUp className="h-4 w-4 text-destructive" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-primary" />
                )}
                <Badge variant={difference > 0 ? "destructive" : "secondary"}>
                  {difference > 0 ? "+" : ""}₺{Math.abs(difference).toFixed(2)}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Geçen aya göre %{Math.abs(percentageChange).toFixed(1)}
                {difference > 0 ? " artış" : " azalış"}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Temel Paket</span>
              <span>₺180.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>İnternet Aşımı (2.8 GB)</span>
              <span>₺78.40</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Konuşma Aşımı (20 dk)</span>
              <span>₺10.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>SMS Aşımı</span>
              <span>₺0.00</span>
            </div>
            <hr />
            <div className="flex justify-between font-medium">
              <span>Toplam Tahmini</span>
              <span>₺{currentMonthPrediction}</span>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Son 4 Ay Maliyet Trendi</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={costData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value, name) => [`₺${value}`, name === "actual" ? "Gerçek" : "Tahmini"]} />
                <Area
                  type="monotone"
                  dataKey="actual"
                  stackId="1"
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="predicted"
                  stackId="2"
                  stroke="hsl(var(--chart-2))"
                  fill="hsl(var(--chart-2))"
                  fillOpacity={0.3}
                  strokeDasharray="5 5"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

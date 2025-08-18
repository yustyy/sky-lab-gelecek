"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Smartphone, Phone, MessageSquare, Calendar } from "lucide-react"

const usageData = [
  { date: "1 Oca", data: 0.8, voice: 45, sms: 12 },
  { date: "5 Oca", data: 1.2, voice: 67, sms: 8 },
  { date: "10 Oca", data: 2.1, voice: 89, sms: 15 },
  { date: "15 Oca", data: 1.8, voice: 56, sms: 22 },
  { date: "20 Oca", data: 2.5, voice: 78, sms: 18 },
  { date: "25 Oca", data: 3.2, voice: 92, sms: 25 },
  { date: "30 Oca", data: 2.8, voice: 71, sms: 19 },
]

const currentUsage = {
  data: { used: 5.2, total: 8, unit: "GB" },
  voice: { used: 287, total: 400, unit: "dk" },
  sms: { used: 45, total: 100, unit: "SMS" },
}

export function UsageOverview() {
  const daysRemaining = 12
  const predictedTotal = {
    data: 7.8,
    voice: 420,
    sms: 78,
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Smartphone className="h-5 w-5" />
          Kullanım Durumu
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
            <TabsTrigger value="trends">Trendler</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-chart-2" />
                      <span className="text-sm font-medium">İnternet</span>
                    </div>
                    <Badge variant="outline">
                      {Math.round((currentUsage.data.used / currentUsage.data.total) * 100)}%
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Progress value={(currentUsage.data.used / currentUsage.data.total) * 100} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        {currentUsage.data.used} {currentUsage.data.unit}
                      </span>
                      <span>
                        {currentUsage.data.total} {currentUsage.data.unit}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">Tahmini: {predictedTotal.data} GB</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-chart-3" />
                      <span className="text-sm font-medium">Konuşma</span>
                    </div>
                    <Badge variant="outline">
                      {Math.round((currentUsage.voice.used / currentUsage.voice.total) * 100)}%
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Progress value={(currentUsage.voice.used / currentUsage.voice.total) * 100} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        {currentUsage.voice.used} {currentUsage.voice.unit}
                      </span>
                      <span>
                        {currentUsage.voice.total} {currentUsage.voice.unit}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">Tahmini: {predictedTotal.voice} dk</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-chart-4" />
                      <span className="text-sm font-medium">SMS</span>
                    </div>
                    <Badge variant="outline">
                      {Math.round((currentUsage.sms.used / currentUsage.sms.total) * 100)}%
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Progress value={(currentUsage.sms.used / currentUsage.sms.total) * 100} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        {currentUsage.sms.used} {currentUsage.sms.unit}
                      </span>
                      <span>
                        {currentUsage.sms.total} {currentUsage.sms.unit}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">Tahmini: {predictedTotal.sms} SMS</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">Ay Sonu Tahmini</span>
                  <Badge variant="secondary">{daysRemaining} gün kaldı</Badge>
                </div>
                <div className="text-2xl font-bold text-primary">₺287.50</div>
                <p className="text-sm text-muted-foreground">Mevcut kullanım trendine göre tahmini fatura tutarı</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Son 30 Gün Kullanım Trendi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={usageData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="data"
                        stroke="hsl(var(--chart-2))"
                        strokeWidth={2}
                        name="İnternet (GB)"
                      />
                      <Line
                        type="monotone"
                        dataKey="voice"
                        stroke="hsl(var(--chart-3))"
                        strokeWidth={2}
                        name="Konuşma (dk)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

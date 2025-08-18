"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Star, Zap } from "lucide-react"

const recommendations = [
  {
    id: 3,
    name: "Bireysel 20GB",
    type: "faturalı",
    monthlyPrice: 350,
    totalCost: 372.5,
    savings: -85,
    quotaData: 20,
    quotaVoice: 1000,
    quotaSms: 500,
    recommended: true,
    reason: "Mevcut kullanımınıza en uygun paket",
  },
  {
    id: 2,
    name: "Platinum 30GB",
    type: "faturalı",
    monthlyPrice: 520,
    totalCost: 520,
    savings: -232.5,
    quotaData: 30,
    quotaVoice: 2000,
    quotaSms: 1000,
    recommended: false,
    reason: "Aşım riski olmayan güvenli seçenek",
  },
  {
    id: 5,
    name: "Faturasız 15GB",
    type: "faturasız",
    monthlyPrice: 260,
    totalCost: 308,
    savings: -20.5,
    quotaData: 15,
    quotaVoice: 700,
    quotaSms: 200,
    recommended: false,
    reason: "Faturasız kullanım için alternatif",
  },
]

export function PlanRecommendations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5" />
          Tarife Önerileri
        </CardTitle>
        <p className="text-sm text-muted-foreground">Son 90 günlük kullanımınıza göre en uygun tarifeler</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((plan, index) => (
          <Card key={plan.id} className={plan.recommended ? "ring-2 ring-primary" : ""}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{plan.name}</h3>
                    {plan.recommended && (
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        Önerilen
                      </Badge>
                    )}
                    {index === 0 && (
                      <Badge variant="secondary">
                        <Zap className="h-3 w-3 mr-1" />
                        En Ekonomik
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.reason}</p>
                </div>
                <Badge variant="outline">{plan.type}</Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                <div>
                  <p className="text-muted-foreground">İnternet</p>
                  <p className="font-medium">{plan.quotaData} GB</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Konuşma</p>
                  <p className="font-medium">{plan.quotaVoice} dk</p>
                </div>
                <div>
                  <p className="text-muted-foreground">SMS</p>
                  <p className="font-medium">{plan.quotaSms} adet</p>
                </div>
              </div>

              <Separator className="my-3" />

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">₺{plan.totalCost}</span>
                    <span className="text-sm text-muted-foreground line-through">₺{plan.monthlyPrice}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    {plan.savings < 0 ? (
                      <>
                        <span className="text-destructive">₺{Math.abs(plan.savings)} fazla</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-3 w-3 text-primary" />
                        <span className="text-primary">₺{plan.savings} tasarruf</span>
                      </>
                    )}
                  </div>
                </div>
                <Button variant={plan.recommended ? "default" : "outline"} size="sm">
                  {plan.recommended ? "Değiştir" : "İncele"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="bg-muted/50">
          <CardContent className="p-4">
            <h4 className="font-medium mb-2">Ek Paket Önerileri</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Ek 5GB İnternet Paketi</span>
                <span className="font-medium">₺75</span>
              </div>
              <div className="flex justify-between">
                <span>Ek 100dk Konuşma Paketi</span>
                <span className="font-medium">₺35</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
              Ek Paket Al
            </Button>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

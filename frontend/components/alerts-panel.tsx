"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertTriangle, Bell, CheckCircle, Info, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Alert {
  id: string
  type: "warning" | "info" | "success" | "error"
  title: string
  message: string
  timestamp: Date
  read: boolean
  actionable: boolean
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "warning",
    title: "İnternet Kotası Uyarısı",
    message: "İnternet kotanızın %85'i tükendi. Ay sonuna 12 gün kaldı.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    read: false,
    actionable: true,
  },
  {
    id: "2",
    type: "info",
    title: "Anomali Tespit Edildi",
    message: "Bugünkü internet kullanımınız son 14 günün 2 katından fazla.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    read: false,
    actionable: false,
  },
  {
    id: "3",
    type: "success",
    title: "Tasarruf Fırsatı",
    message: "Bireysel 20GB paketine geçerek aylık ₺85 tasarruf edebilirsiniz.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
    read: true,
    actionable: true,
  },
  {
    id: "4",
    type: "warning",
    title: "Konuşma Kotası",
    message: "Konuşma kotanızın %70'i tükendi.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    read: true,
    actionable: false,
  },
]

export function AlertsPanel() {
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts)
  const { toast } = useToast()

  // Simulate real-time alerts
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new alert every 30 seconds (for demo)
      if (Math.random() > 0.7) {
        const newAlert: Alert = {
          id: Date.now().toString(),
          type: "info",
          title: "Gerçek Zamanlı Uyarı",
          message: "Yeni bir kullanım anomalisi tespit edildi.",
          timestamp: new Date(),
          read: false,
          actionable: false,
        }

        setAlerts((prev) => [newAlert, ...prev])

        toast({
          title: newAlert.title,
          description: newAlert.message,
        })
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [toast])

  const markAsRead = (id: string) => {
    setAlerts((prev) => prev.map((alert) => (alert.id === id ? { ...alert, read: true } : alert)))
  }

  const dismissAlert = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id))
  }

  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "error":
        return <AlertTriangle className="h-4 w-4 text-destructive" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-primary" />
      case "info":
      default:
        return <Info className="h-4 w-4 text-blue-500" />
    }
  }

  const unreadCount = alerts.filter((alert) => !alert.read).length

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Uyarılar
          </div>
          {unreadCount > 0 && <Badge variant="destructive">{unreadCount}</Badge>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-3">
            {alerts.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Henüz uyarı bulunmuyor</p>
              </div>
            ) : (
              alerts.map((alert) => (
                <Card key={alert.id} className={`${!alert.read ? "ring-1 ring-primary/20 bg-primary/5" : ""}`}>
                  <CardContent className="p-3">
                    <div className="flex items-start gap-3">
                      {getAlertIcon(alert.type)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-medium truncate">{alert.title}</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={() => dismissAlert(alert.id)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{alert.message}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {alert.timestamp.toLocaleTimeString("tr-TR", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                          <div className="flex gap-1">
                            {!alert.read && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 text-xs px-2"
                                onClick={() => markAsRead(alert.id)}
                              >
                                Okundu
                              </Button>
                            )}
                            {alert.actionable && (
                              <Button variant="outline" size="sm" className="h-6 text-xs px-2 bg-transparent">
                                İşlem Yap
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

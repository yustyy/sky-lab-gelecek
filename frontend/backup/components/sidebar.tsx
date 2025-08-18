"use client"

import { useState } from "react"
import { BarChart3, CreditCard, Home, MessageSquare, Settings, Smartphone, TrendingUp, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Dashboard", href: "#", icon: Home, current: true },
  { name: "Kullanım Analizi", href: "#", icon: BarChart3, current: false },
  { name: "Tarife Önerileri", href: "#", icon: TrendingUp, current: false },
  { name: "Fatura & Ödemeler", href: "#", icon: CreditCard, current: false },
  { name: "Paketler", href: "#", icon: Smartphone, current: false },
  { name: "Uyarılar", href: "#", icon: MessageSquare, current: false },
  { name: "Müşteri Hizmetleri", href: "#", icon: Users, current: false },
  { name: "Ayarlar", href: "#", icon: Settings, current: false },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={cn("flex flex-col bg-sidebar border-r transition-all duration-300", collapsed ? "w-16" : "w-64")}>
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant={item.current ? "secondary" : "ghost"}
              className={cn("w-full justify-start", collapsed && "px-2")}
            >
              <item.icon className={cn("h-5 w-5", !collapsed && "mr-3")} />
              {!collapsed && item.name}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const mockUsers = [
  { id: "1001", name: "Ahmet Yılmaz", type: "faturasız", plan: "Faturasız 8GB", phone: "5XXXXXXXXX" },
  { id: "1002", name: "Aylin Demir", type: "faturalı", plan: "GNÇ 10GB", phone: "5XXXXXXXXX" },
  { id: "1003", name: "Mehmet Kaya", type: "faturalı", plan: "Platinum 30GB", phone: "5XXXXXXXXX" },
]

export function UserProfile() {
  const [selectedUser, setSelectedUser] = useState(mockUsers[0])

  return (
    <Card className="w-80">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Kullanıcı Profili</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select
          value={selectedUser.id}
          onValueChange={(value) => {
            const user = mockUsers.find((u) => u.id === value)
            if (user) setSelectedUser(user)
          }}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {mockUsers.map((user) => (
              <SelectItem key={user.id} value={user.id}>
                {user.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Hat Türü:</span>
            <Badge variant={selectedUser.type === "faturalı" ? "default" : "secondary"}>{selectedUser.type}</Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Mevcut Paket:</span>
            <span className="text-sm font-medium">{selectedUser.plan}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Telefon:</span>
            <span className="text-sm font-medium">{selectedUser.phone}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

export interface WebSocketMessage {
  type: "alert" | "usage_update" | "cost_update"
  data: any
  timestamp: string
}

export function useWebSocket(url: string) {
  const [isConnected, setIsConnected] = useState(false)
  const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null)
  const ws = useRef<WebSocket | null>(null)

  useEffect(() => {
    // In a real implementation, this would connect to your WebSocket server
    // For demo purposes, we'll simulate WebSocket messages
    const simulateWebSocket = () => {
      setIsConnected(true)

      const interval = setInterval(() => {
        const mockMessage: WebSocketMessage = {
          type: "alert",
          data: {
            id: Date.now().toString(),
            level: "info",
            message: "Gerçek zamanlı uyarı simülasyonu",
            created_at: new Date().toISOString(),
          },
          timestamp: new Date().toISOString(),
        }

        setLastMessage(mockMessage)
      }, 30000) // Every 30 seconds

      return () => {
        clearInterval(interval)
        setIsConnected(false)
      }
    }

    const cleanup = simulateWebSocket()

    return cleanup
  }, [url])

  const sendMessage = (message: any) => {
    // In a real implementation, this would send via WebSocket
    console.log("[WebSocket] Sending message:", message)
  }

  return {
    isConnected,
    lastMessage,
    sendMessage,
  }
}

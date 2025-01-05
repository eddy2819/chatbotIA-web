"use client"

import * as React from "react"
import { Home, MessageCircle, Bell, Settings } from 'lucide-react'
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navigation = [
  { name: "Inicio", href: "#", icon: Home },
  { name: "Chat", href: "#", icon: MessageCircle },
  { name: "Notificaciones", href: "#", icon: Bell },
  { name: "Configuración", href: "#", icon: Settings },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0 bg-white">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2 text-primary">
          <span className="font-semibold text-center">AssiMed</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                className={cn(
                  "flex items-center gap-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600",
                  "data-[active=true]:bg-blue-50 data-[active=true]:text-blue-600"
                )}
              >
                <a href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}


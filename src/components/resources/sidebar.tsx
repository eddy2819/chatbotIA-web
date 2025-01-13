"use client"

import * as React from "react"
import Link from 'next/link'
import Image from 'next/image'
import { Home, MessageCircle, Bell, Settings, Users } from 'lucide-react'
import { cn } from "@/lib/utils"

import profilePic from '@/assets/profile-pic.png'


const navigation = [
  { name: "Inicio", href: "/clinica-history", icon: Home },
  { name: "Pacientes", href: "/page", icon: Users },
  { name: "Chat", href: "/chat-page", icon: MessageCircle },
  { name: "Notificaciones", href: "#", icon: Bell },
  { name: "Configuración", href: "#", icon: Settings },
]

export function AppSidebar() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  return (
    <div className="w-64 bg-white border-r">
      <div className="p-4">
        <Image
          src={profilePic}
          alt="User Profile"
          className="w-auto rounded-full object-cover"
        />
        <nav className="space-y-2">
          {navigation.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-2 rounded-lg transition-colors",
                pathname === item.href
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {React.createElement(item.icon, {
                className: cn(
                  "w-5 h-5 mr-3",
                  pathname === item.href
                    ? "text-purple-600"
                    : "text-gray-700"
                )
              })}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}


'use client'

import { Bell, Paperclip, Search, Send, Smile } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import profilePic from '@/assets/profile-pic.png';
import { AppSidebar } from '@/components/resources/sidebar'
import DashboardHeader from '@/components/resources/dashboardHeader'

export default function ChatPage() {
  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r shadow-md">
        <AppSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <DashboardHeader />

        {/* Chat Area */}
        <ScrollArea className="flex-1 p-6 bg-gray-100 shadow-lg rounded-lg">
          <div className="space-y-6">
            {/* Mensaje del bot */}
            <div className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-purple-500 text-white">
                  <Image src={require('@/assets/bot.png')} alt="Bot" width={32} height={32} />
                </AvatarFallback>
              </Avatar>
              <Card className="p-4 max-w-[80%] bg-blue-100 border border-blue-300 rounded-lg shadow-sm">
                <p className="text-xs text-blue-600 font-semibold mb-1">ASSISMED</p>
                <p>¡Hola Dr./Dra Salomé! Bienvenido a AssiMed. Estoy aquí para ayudarle a gestionar y monitorear el estado de sus pacientes diabéticos. ¿Cómo le gustaría comenzar hoy?</p>
                <p className="text-xs text-gray-500 mt-2">10:59 AM</p>
              </Card>
            </div>

            {/* Respuesta del usuario */}
            <div className="flex justify-end space-x-4">
              <Card className="bg-purple-600 text-white p-3 rounded-lg shadow-md">
                <p>Muéstrame el estado de Jose Rojas</p>
                <p className="text-xs opacity-70 mt-1">11:00 AM</p>
              </Card>
            </div>

            {/* Respuesta del bot */}
            <div className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-purple-500 text-white">
                  <Image src={require('@/assets/bot.png')} alt="Bot" width={32} height={32} />
                </AvatarFallback>
              </Avatar>
              <Card className="p-4 max-w-[80%] bg-pink-100 border border-pink-300 rounded-lg shadow-sm">
                <p className="text-xs text-pink-600 font-semibold mb-1">ASSISMED</p>
                <p>El último registro de Jose muestra un nivel de glucosa bajo: mg/dL, además e notado que el paciente no acudió a su control regular</p>
                <p className="text-xs text-gray-500 mt-2">11:01 AM</p>
              </Card>
            </div>
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="bg-white border-t p-4 shadow-inner">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-purple-600 hover:text-purple-800">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Input 
              placeholder="Escribe tu mensaje" 
              className="flex-1 border border-purple-300 focus:ring-2 focus:ring-purple-600 rounded-lg"
            />
            <Button variant="ghost" size="icon" className="text-purple-600 hover:text-purple-800">
              <Smile className="w-5 h-5" />
            </Button>
            <Button size="icon" className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

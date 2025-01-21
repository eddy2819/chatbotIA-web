'use client'

import { Bell, Paperclip, Search, Send, Smile } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AppSidebar } from '@/components/resources/sidebar'
import DashboardHeader from '@/components/resources/dashboardHeader'

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: '¡Hola Doctor! Bienvenido a AssiMed. Estoy aquí para ayudarle a gestionar y monitorear el estado de sus pacientes diabéticos. ¿Cómo le gustaría comenzar hoy?',
      timestamp: ''
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return

    const newMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages([...messages, newMessage])
    setInputValue('')

    try {
      const response = await axios.post('https://chatbotia-backend.onrender.com/chat/doctor', null, {
        params: {
          query_type: 'doctor',
          query: inputValue,
          doctor_name: 'Dr. Juan Perez'
        }
      })

      const botResponse = {
        type: 'bot',
        text: response.data.response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      setMessages([...messages, newMessage, botResponse])
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

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
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'items-start space-x-4'}`}>
                {message.type === 'bot' && (
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-purple-500 text-white">
                      <Image src={require('@/assets/bot.png')} alt="Bot" width={32} height={32} />
                    </AvatarFallback>
                  </Avatar>
                )}
                <Card className={`p-4 max-w-[80%] ${message.type === 'user' ? 'bg-purple-600 text-white' : 'bg-blue-100 border border-blue-300'} rounded-lg shadow-sm`}>
                  <p className={`text-xs ${message.type === 'user' ? 'opacity-70' : 'text-blue-600 font-semibold mb-1'}`}>{message.type === 'bot' ? 'ASSISMED' : ''}</p>
                  <p>{message.text}</p>
                  <p className="text-xs text-gray-500 mt-2">{message.timestamp}</p>
                </Card>
              </div>
            ))}
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
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button size="icon" className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg" onClick={handleSendMessage}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
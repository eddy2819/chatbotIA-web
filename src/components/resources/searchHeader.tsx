import React from "react"
import { Search, Bell, UserCircle, Settings } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const SearchHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center w-full max-w-md">
        <Search className="w-5 h-5 text-gray-400 mr-2 " />
        <Input
          type="search"
          placeholder="Buscar pacientes..."
          className="w-full"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="hover:bg-violet-50">
          <Bell className="w-5 h-5"/>
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-violet-50">
          <Settings className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-violet-50">
          <UserCircle className="w-5 h-5" />
        </Button>
        
      </div>
    </header>
  )
}

export default SearchHeader


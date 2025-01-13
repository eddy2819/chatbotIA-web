import { Bell, Search, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between border-b px-6 py-4 bg-white">
      <h1 className="text-xl font-semibold">Bienvenida/o, Dr. Salome!</h1>
      <div className="flex items-center gap-4 ">
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Avatar>
          <AvatarImage src="https://randomuser.me/api/portraits/men/18.jpg" />
          <AvatarFallback>DR</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}


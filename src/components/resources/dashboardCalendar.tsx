"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const upcomingAppointments = [
  { name: "John Smith", time: "10:30 AM" },
  { name: "Jane Doe", time: "2:15 PM" },
]

export default function DashboardCalendar() {
  return (
    <Card className="h-full" style={{ height: "100%" }}>
      <CardHeader>
        <CardTitle>Calendario</CardTitle>
      </CardHeader>
      <CardContent
        className="flex flex-col"
        style={{ height: "calc(100% - 4rem)", overflow: "auto" }} // Ajusta la altura y agrega scroll si es necesario
      >
        {/* Ajusta el calendario */}
        <div className="flex-grow" style={{ height: "100%" }}>
          <Calendar mode="single" className="mb-4 h-full" />
        </div>
        <div>
          <h3 className="font-semibold mb-4">Próximas citas el Febrero 10, 2025</h3>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.name} className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://randomuser.me/api/portraits/men/15.jpg" />
                  <AvatarFallback>{appointment.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{appointment.name}</p>
                  <p className="text-sm text-muted-foreground">{appointment.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

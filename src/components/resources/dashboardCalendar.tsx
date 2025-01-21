"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format, isSameDay, parseISO } from "date-fns";

const upcomingAppointments = [
  { name: "John Smith", time: "10:30 AM", date: "2025-01-25" },
  { name: "Jane Doe", time: "2:15 PM", date: "2025-01-25" },
  { name: "Alice Johnson", time: "11:00 AM", date: "2025-01-26" },
];

export default function DashboardCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const filteredAppointments = upcomingAppointments.filter(
    (appointment) => selectedDate && isSameDay(parseISO(appointment.date), selectedDate)
  );

  const modifiers = {
    selected: selectedDate ? new Date(selectedDate) : [],
    hasAppointment: (day: Date) => upcomingAppointments.some(appointment => isSameDay(day, parseISO(appointment.date))),
  };

  const modifiersClassNames = {
    selected: "bg-blue-200 text-blue-800",
    hasAppointment: "bg-pink-200 text-pink-800",
  };

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
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            className="mb-4 h-full"
            modifiers={modifiers}
            modifiersClassNames={modifiersClassNames}
          />
        </div>
        <div>
          <h3 className="font-semibold mb-4">
            Próximas citas el {selectedDate ? format(selectedDate, 'PPP') : "Seleccione una fecha"}
          </h3>
          <div className="space-y-4">
            {filteredAppointments.map((appointment) => (
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
  );
}
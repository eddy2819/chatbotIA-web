import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const waitingPatients = [
  { name: "Jhon Doe", date: "August 21, 2023" },
  { name: "Jack Johnson", date: "August 21, 2023" },
]

const attendedPatients = [
  { name: "Jenny Anderson", date: "August 21, 2023" },
  { name: "Alexa Robinson", date: "August 21, 2023" },
]

export default function PatientLists() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Pacientes Por Atender</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {waitingPatients.map((patient) => (
              <div key={patient.name} className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://randomuser.me/api/portraits/men/22.jpg" />
                  <AvatarFallback>{patient.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sm text-muted-foreground">{patient.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pacientes atendidos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {attendedPatients.map((patient) => (
              <div key={patient.name} className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" />
                  <AvatarFallback>{patient.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sm text-muted-foreground">{patient.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmergencySection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Emergencia</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Patient John Smith has an emergency alert</p>
            <p className="text-sm text-muted-foreground">August 21, 2023</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


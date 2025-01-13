import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { title: "Pacientes", value: "150" },
  { title: "Recordatorios", value: "120" },
  { title: "Mensajes", value: "7" },
  { title: "Gestión de exámenes", value: "100" },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-white shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


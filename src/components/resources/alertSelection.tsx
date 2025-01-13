import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Bell } from 'lucide-react'

const AlertSection = () => {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bell className="w-5 h-5 mr-2" />
          Alertas Inteligentes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li className="text-sm">
            <strong>Paciente:</strong> John Doe
            <br />
            <span className="text-red-500">Alerta: Resultados de laboratorio pendientes</span>
          </li>
          <li className="text-sm">
            <strong>Paciente:</strong> Jane Smith
            <br />
            <span className="text-yellow-500">Recordatorio: Seguimiento requerido</span>
          </li>
          <li className="text-sm">
            <strong>Paciente:</strong> Bob Johnson
            <br />
            <span className="text-blue-500">Información: Actualización de historial médico</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

export default AlertSection


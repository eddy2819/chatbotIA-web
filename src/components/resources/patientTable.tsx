import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye, FileText, MoreHorizontal } from "lucide-react"

const PatientTable = () => {
  return (
    <Table className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
      <TableHeader className="bg-gray-100">
        <TableRow>
          <TableHead className="py-3 text-left font-bold">Paciente</TableHead>
          <TableHead className="py-3 text-left font-bold">Fecha de ingreso</TableHead>
          <TableHead className="py-3 text-left font-bold">Número</TableHead>
          <TableHead className="py-3 text-left font-bold">Número Emergencia</TableHead>
          <TableHead className="py-3 text-center font-bold">AI Analysis</TableHead>
          <TableHead className="py-3 text-center font-bold">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {patients.map((patient, index) => (
          <TableRow
            key={patient.id}
            className={`${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            } hover:bg-gray-100`}
          >
            <TableCell className="py-4 px-6 font-medium text-gray-800">
              {patient.name}
            </TableCell>
            <TableCell className="py-4 px-6">{patient.admissionDate}</TableCell>
            <TableCell className="py-4 px-6">{patient.phoneNumber}</TableCell>
            <TableCell className="py-4 px-6">{patient.emergencyNumber}</TableCell>
            <TableCell className="py-4 px-6">
              <Button variant="outline" size="sm" className="text-blue-600 border-blue-600">
                <FileText className="w-4 h-4 mr-2" />
                Revisar historial
              </Button>
            </TableCell>
            <TableCell className="py-4 px-6 text-right">
              <Button variant="ghost" size="sm" className="text-green-600">
                <Eye className="w-4 h-4 mr-2" />
                Ver detalles
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const patients = [
  {
    id: 1,
    name: "Caitlin O'Conner",
    admissionDate: "July 7, 2023",
    phoneNumber: "099318900",
    emergencyNumber: "099934394",
  },
  {
    id: 2,
    name: "Brandon Lee",
    admissionDate: "June 30, 2023",
    phoneNumber: "099434399",
    emergencyNumber: "N/A",
  },
  {
    id: 3,
    name: "Avery Smith",
    admissionDate: "June 15, 2023",
    phoneNumber: "099454944",
    emergencyNumber: "099954599",
  },
  {
    id: 4,
    name: "Morgan Taylor",
    admissionDate: "July 2, 2023",
    phoneNumber: "099567890",
    emergencyNumber: "099876543",
  },
  {
    id: 5,
    name: "Jamie Rodriguez",
    admissionDate: "June 25, 2023",
    phoneNumber: "099234567",
    emergencyNumber: "099765432",
  },
]

export default PatientTable

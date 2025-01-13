import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Button } from "@/components/ui/button";
  import { Eye } from "lucide-react";
  
  const exams = [
    {
      id: 1,
      patient: "Caitlin O'Conner",
      date: "July 7, 2023",
      examType: "MRI",
      status: "Complete",
    },
    {
      id: 2,
      patient: "Brandon Lee",
      date: "June 30, 2023",
      examType: "CT Scan",
      status: "Complete",
    },
    {
      id: 3,
      patient: "Avery Smith",
      date: "June 15, 2023",
      examType: "Ultrasound",
      status: "Complete",
    },
    {
      id: 4,
      patient: "Ethan Johnson",
      date: "June 7, 2023",
      examType: "X-Ray",
      status: "Complete",
    },
    {
      id: 5,
      patient: "Mia Williams",
      date: "May 20, 2023",
      examType: "MRI",
      status: "Complete",
    },
  ];
  
  export function ExamTable() {
    return (
      <div className="p-4 rounded-lg shadow-md bg-white border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Exams Overview</h2>
        <Table className="w-full border-collapse">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="px-4 py-2 text-left text-gray-600 font-semibold">
                Patient
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-gray-600 font-semibold">
                Date
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-gray-600 font-semibold">
                Exam Type
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-gray-600 font-semibold">
                Status
              </TableHead>
              <TableHead className="px-4 py-2 text-center text-gray-600 font-semibold">
                AI Analysis
              </TableHead>
              <TableHead className="px-4 py-2 text-center text-gray-600 font-semibold">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {exams.map((exam) => (
              <TableRow
                key={exam.id}
                className="hover:bg-gray-50 transition-all ease-in-out"
              >
                <TableCell className="px-4 py-3 text-gray-700">
                  {exam.patient}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700">
                  {exam.date}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-700">
                  {exam.examType}
                </TableCell>
                <TableCell
                  className={`px-4 py-3 font-medium ${
                    exam.status === "Complete"
                      ? "text-green-600"
                      : "text-yellow-500"
                  }`}
                >
                  {exam.status}
                </TableCell>
                <TableCell className="px-4 py-3 text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Revisar Historial
                  </Button>
                </TableCell>
                <TableCell className="px-4 py-3 text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Ver detalles
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  
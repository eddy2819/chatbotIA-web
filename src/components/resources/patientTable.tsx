'use client';

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, FileText, MoreHorizontal, PlusCircle } from "lucide-react";
import axios from 'axios';
import FilterBar from "@/components/resources/filterBar"; // Importa FilterBar
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Patient {
  ci: string;
  name: string;
  second_name: string;
  created_at: string;
  phone: string;
  email: string;
}

const PatientTable = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [showPrescriptionForm, setShowPrescriptionForm] = useState<boolean>(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [prescription, setPrescription] = useState({
    medication: '',
    dosage: '',
    instructions: ''
  });

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('https://chatbotia-backend.onrender.com/patients');
        setPatients(response.data);
        setFilteredPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  useEffect(() => {
    applyFilter();
  }, [filter, patients]);

  const applyFilter = () => {
    let filtered = patients;
    if (filter === 'alphabetical') {
      filtered = [...patients].sort((a, b) => a.name.localeCompare(b.name));
    } else if (filter === 'incomplete') {
      filtered = patients.filter(patient => !patient.email || !patient.phone);
    } else if (filter === 'draft') {
      filtered = patients.filter(patient => patient.ci === '');
    }
    setFilteredPatients(filtered);
  };

  const handleViewDetails = (patient: Patient) => {
    setSelectedPatient(patient);
    setShowPrescriptionForm(true);
  };

  const handlePrescriptionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPatient) return;

    const doctorId = 1; // Assuming doctor ID starts at 1 and increments
    const patientId = 20; // Assuming patient ID starts at 20 and increments

    try {
      const response = await axios.post('https://chatbotia-backend.onrender.com/upload_prescription/', {
        patient_id: patientId.toString(),
        doctor_id: doctorId.toString(),
        medication: prescription.medication,
        dosage: prescription.dosage,
        instructions: prescription.instructions
      });

      console.log(response.data.message);
      setShowPrescriptionForm(false);
      setPrescription({ medication: '', dosage: '', instructions: '' });
    } catch (error) {
      console.error('Error uploading prescription:', error);
    }
  };

  return (
    <>
      <FilterBar setFilter={setFilter} />
      <Table className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="py-3 text-left font-bold">Paciente</TableHead>
            <TableHead className="py-3 text-left font-bold">Fecha de ingreso</TableHead>
            <TableHead className="py-3 text-left font-bold">Email</TableHead>
            <TableHead className="py-3 text-left font-bold">Número</TableHead>
            <TableHead className="py-3 text-center font-bold">AI Analysis</TableHead>
            <TableHead className="py-3 text-center font-bold">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPatients.map((patient, index) => (
            <TableRow
              key={patient.ci}
              className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}
            >
              <TableCell className="py-4 px-6 font-medium text-gray-800">
                {patient.name} {patient.second_name}
              </TableCell>
              <TableCell className="py-4 px-6">{new Date(patient.created_at).toLocaleDateString()}</TableCell>
              <TableCell className="py-4 px-6">{patient.email}</TableCell>
              <TableCell className="py-4 px-6">{patient.phone}</TableCell>
              <TableCell className="py-4 px-6">
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-600">
                  <FileText className="w-4 h-4 mr-2" />
                  Revisar historial
                </Button>
              </TableCell>
              <TableCell className="py-4 px-6 text-right">
                <Button variant="ghost" size="sm" className="text-purple-600" onClick={() => handleViewDetails(patient)}>
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Añadir Receta
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {showPrescriptionForm && selectedPatient && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Card className="p-6 bg-white rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Subir Receta Médica</h2>
            <form onSubmit={handlePrescriptionSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Paciente</label>
                <Input
                  type="text"
                  value={`${selectedPatient.name} ${selectedPatient.second_name}`}
                  readOnly
                  className="mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Medicación</label>
                <Input
                  type="text"
                  value={prescription.medication}
                  onChange={(e) => setPrescription({ ...prescription, medication: e.target.value })}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Dosis</label>
                <Input
                  type="text"
                  value={prescription.dosage}
                  onChange={(e) => setPrescription({ ...prescription, dosage: e.target.value })}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Instrucciones</label>
                <Input
                  type="text"
                  value={prescription.instructions}
                  onChange={(e) => setPrescription({ ...prescription, instructions: e.target.value })}
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div className="flex justify-end">
                <Button type="button" variant="outline" className="mr-2" onClick={() => setShowPrescriptionForm(false)}>
                  Cancelar
                </Button>
                <Button type="submit" className="bg-purple-600 text-white">
                  Subir Receta
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </>
  );
};

export default PatientTable;
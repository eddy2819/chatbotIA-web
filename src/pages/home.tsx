"use client"

import React from "react"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import SearchHeader from "@/components/resources/searchHeader"
import FilterBar from "@/components/resources/filterBar"
import AlertSection from "@/components/resources/alertSelection"
import PatientTable from "@/components/resources/patientTable"
import { AppSidebar } from "@/components/resources/sidebar"

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden bg-gray-100">
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <AppSidebar />
          {/* Main Content */}
          <SidebarInset className="flex flex-col">
            {/* Header */}
            <SearchHeader />
            <main className="flex-1 overflow-y-auto p-8 bg-white shadow-md rounded-lg m-4">
              {/* Page Title */}
              <h1 className="text-3xl font-bold text-gray-800 border-b pb-4 mb-6">
                Pacientes e Historias Clínicas
              </h1>
              {/* Content Sections */}
              <div className="flex gap-16">
                {/* Left Section */}
                <div className="flex-1">
                  {/* Patient Table */}
                  <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <PatientTable />
                  </div>
                </div>
                {/* Right Section */}
                <div className="w-1/3 bg-gray-50 p-6 rounded-lg shadow">
                  <AlertSection />
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}

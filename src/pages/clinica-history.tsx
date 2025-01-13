"use client"

import React from "react"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import SearchHeader from "@/components/resources/searchHeader"
import FilterBar from "@/components/resources/filterBar"
import { AppSidebar } from "@/components/resources/sidebar"
import { ExamTable } from "@/components/resources/examTable"
import { IntelligentAlert } from "@/components/resources/intelligentAlert"

export default function clinicaHistory() {
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
              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-800 border-b pb-4 mb-6">
                Gestión de Exámenes e Historias Clínicas
              </h1>
              {/* Content */}
              <div className="flex gap-16">
                {/* Left Section */}
                <div className="flex-1">
                  <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow">
                    <FilterBar />
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <ExamTable />
                  </div>
                </div>
                {/* Right Section */}
                <div className="w-1/3 bg-gray-50 p-6 rounded-lg shadow">
                  <IntelligentAlert />
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}

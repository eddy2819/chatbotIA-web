"use client"

import DashboardCalendar from "@/components/resources/dashboardCalendar"
import DashboardHeader from "@/components/resources/dashboardHeader"
import EmergencySection from "@/components/resources/emergencySection"
import PatientLists from "@/components/resources/patientList"
import { AppSidebar } from "@/components/resources/sidebar"
import StatsCards from "@/components/resources/statsCards"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <div className="flex-1 flex flex-col h-screen bg-gray-100">
          <DashboardHeader />
          <main className="flex-1 p-6 overflow-auto">
            <div className="h-full mx-auto">
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                <div className="xl:col-span-3 space-y-6">
                  <StatsCards />
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <EmergencySection />
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <PatientLists />
                  </div>
                </div>
                <div className="xl:col-span-1">
                  <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                    <DashboardCalendar />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}


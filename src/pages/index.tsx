import React from "react";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar"
import { AppSidebar } from "@/components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";



export default function Home() {
  
  return (
    <SidebarProvider>
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Content goes here</h1>
      </main>
    </div>
  </SidebarProvider>
    

    
  );
}

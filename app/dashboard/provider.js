import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from './_components/AppSidebar'
function DashboardProvider({ children }) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />

                <SidebarTrigger />

                {children}

            </SidebarProvider>
        </div>
    )
}

export default DashboardProvider
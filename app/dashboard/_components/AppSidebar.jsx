import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function AppSidebar() {
  return (
     <Sidebar>
      <SidebarHeader className='flex items-center ' >
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
          <Button>+ Create New Course</Button>
        </SidebarGroup >
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
'use client'
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Book, Compass, LayoutDashboard, UserCircle2Icon, WalletCards } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function AppSidebar() {
  const path = usePathname()
  const menu=[
    {
      title:'Dashboard',
      icon:LayoutDashboard,
      path:'/dashboard'
    },
    {
      title:"My Courses",
      icon:Book,
      path:"/dashboard/my-courses"
    },

    {
      title:"Explore Courses",
      icon:Compass,
      path:"/dashboard/explore"
    },

    {
      title:"Billing",
      icon:WalletCards,
      path:"/dashboard/billing"
    },

     {
      title:"Profile",
      icon:UserCircle2Icon,
      path:"/dashboard/profile"
    },
  ]
  return (
     <Sidebar>
      <SidebarHeader className='flex items-center ' >
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
          <Button>+ Create New Course</Button>
        </SidebarGroup >
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
             {menu.map((item)=>(
                <SidebarMenuItem>
                   <SidebarMenuButton >
                     <Link   className={`flex gap-3  w-full p-3 rounded-2xl  ${path === item.path && 'bg-[#d2e0f4]'} `} href={item.path}>
                        <item.icon className='text-[#5486CD]'/>
                        <span>{item.title}</span>
                      
                      </Link>
                   </SidebarMenuButton>
                   
                </SidebarMenuItem>
                
              
             ))}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
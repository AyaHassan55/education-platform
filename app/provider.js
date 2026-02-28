'use client'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useUser} from '@clerk/nextjs'
function Provider({children}) {
    const {user} = useUser()
    useEffect(()=>{
        if(user){
            createNewUser()
        }
    },[user])
    const createNewUser =async()=>{
        const res = await axios.post("/api/user",{
            name:user?.fullName,
            email:user?.primaryEmailAddress?.emailAddress,
    }
    )    
    console.log("User created:", res.data);
    }
  return (
    <div>{children}</div>
  )
}

export default Provider
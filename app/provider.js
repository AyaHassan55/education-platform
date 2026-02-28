'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useUser} from '@clerk/nextjs'
import { UserDetailsContext } from '@/context/UserContext'
function Provider({children}) {
    const {user} = useUser()
    const [userDetails, setUserDetails] = useState()
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
    <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>

    <div>{children}</div>
    </UserDetailsContext.Provider>
  )
}

export default Provider
'use client'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LogOutButton() {
    // const isInfobar = true
    const router =  useRouter()
    async function handleLogOut(){
        await signOut({redirect:false})
        router.push('/login')
    }

  return (
    <div>
        <span onClick={handleLogOut} className='flex gap-2 justify-center text-red-500 hover:text-red-600  cursor-pointer items-center'>
                    <p >Sign Out</p>
                </span>
        

    </div>
  )
}

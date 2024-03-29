"use client"
import React, { useContext } from 'react'
import { redirect } from 'next/navigation'
import { AppContext } from '@/utils/context/appContextProvider'


export default function AuthPage() {
  
 const context = useContext(AppContext)

 let isLoggedIn = context.user ? true : false

 if(!isLoggedIn) redirect("/login?nexturl=auth-page")

  const content = (text: string) => (
    <div className='w-max mx-auto pt-20 flex-col justify-center'>
     <p className='text-center text-2xl mb-4 text-slate-300'>{text}</p>
    </div>
  )

  return content("This is a super secrete page!")
}
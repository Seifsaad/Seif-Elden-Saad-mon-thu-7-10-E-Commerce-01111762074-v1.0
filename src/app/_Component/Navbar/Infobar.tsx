'use client'
import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { HiGift } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";
import Link from 'next/link';
// import { getServerSession } from 'next-auth';
import LogOutButton from '../Button/LogOutButton';
import { useSession } from 'next-auth/react';



export default function Infobar() {

    // const res = await getServerSession()
    // const username = res?.user?.name;
    // const isUserAuthenticated = !!username;
    const session = useSession()
    const username = session.data?.user?.name;
    const isUserAuthenticated = session.status === "authenticated";
    

  return (
    <div className='hidden md:flex lg:px-20 px-2 justify-center lg:justify-between items-center p-2 '>
        <div className=' gap-3 hidden lg:flex '>
            <div className='flex gap-2 justify-center items-center'>
                <MdLocalShipping />
                <p>Free Shipping on Orders 500 EGP</p>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <HiGift />
                <p>New Arrivals Daily</p>
            </div>
        </div>
        <div className='flex gap-6'>
            <div className='flex gap-2'>
                <div className='flex gap-2 justify-center hover:text-green-600 cursor-pointer items-center'>
                    <FaPhoneAlt />
                    <p>+1 (800) 123-4567</p>
                </div>
                <div className='flex gap-2 justify-center hover:text-green-600 cursor-pointer items-center'>
                    <CiMail />
                    <p>support@freshcart.com</p>
                </div>
            </div>
            {isUserAuthenticated ? 
            <>
                        <div className='flex gap-2'>
                <Link href={"/profile"} className='flex gap-2 justify-center hover:text-green-600 items-center'>
                    <p>{username}</p>
                </Link>
                
                <LogOutButton />   

            </div>
            </>
             : 
             <>
                       <div className='flex gap-2'>
                <Link href={"/login"} className='flex gap-2 justify-center hover:text-green-600 items-center'>
                    <CiUser />
                    <p>Sign In</p>
                </Link>
                <Link href={"/register"} className='flex gap-2 justify-center hover:text-green-600 items-center'>
                    <FaUserPlus />
                    <p>Sign Up</p>
                </Link>
            </div> 
             </>
            }

        </div>
    </div>
  )
}

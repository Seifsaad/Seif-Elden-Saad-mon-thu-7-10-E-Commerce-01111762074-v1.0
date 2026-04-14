import { getMyOrders } from '_/Api/route.services'
import { Order } from '_/Api/types.services';
import Link from 'next/link';
import React from 'react'
import { FaBoxOpen } from "react-icons/fa6";
import OrderCard from './OrderCard';


export default async function allorders() {

    const myOrders = await getMyOrders()
    console.log('myOrders from allorders', myOrders);



    return (
        <div>
            <div className='p-5'>
                <span className='flex gap-2 mb-5'><Link href={'/'} className='text-gray-500 cursor-pointer'>Home</Link> / <p className='text-gray-500'>My Orders</p></span>
                <div className='mt-5 flex items-center gap-3'>
                    <div className='w-12 h-12 rounded-lg bg-linear-to-r from-green-500 to-green-600 flex items-center justify-center'>
                        <FaBoxOpen className='text-3xl text-white' />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>My Orders</h1>
                        <p className='text-gray-500'>Track your orders, returns, and exchanges your <span className='font-bold text-black'>{myOrders?.length}</span> orders</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    {myOrders?.map((order: Order) => (
                        <OrderCard key={order._id} order={order} />
                    ))}
                </div>
            </div>
        </div>
    )
}
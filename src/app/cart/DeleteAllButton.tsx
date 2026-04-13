'use client'
import { Button } from '_/components/ui/button'
import React from 'react'
import { removeAllProductFromCart } from './cart.action'
import { toast } from 'sonner';
import { MdDelete } from "react-icons/md";


export default function DeleteAllButton() {

    async function handleDeleteProducts(){
        const result = await removeAllProductFromCart();
        if(result){
            toast.success(`All Products Deleted Successfuly`, {position:"top-right", duration:3000, style:{color:"green"}, closeButton:true})
            return result;
    }
    else{
        toast.error(`Failed to delete all products`, {position:"top-right", duration:3000, style:{color:"red"}, closeButton:true})
    }
}

  return (
<Button onClick={handleDeleteProducts} className="flex bg-transparent justify-center items-center py-5 gap-2 text-red-400 hover:text-red-600 cursor-pointer">
<MdDelete/>
<span>Delete All Products</span>
</Button>
)
}

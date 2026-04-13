'use client'
import { Button } from '_/components/ui/button'
import React from 'react'
import { updateProductCart } from './cart.action'
import { toast } from 'sonner';

export default function UpdateProductCountButton({isIncrement ,id,newCount}:{isIncrement?:boolean,id:string,newCount:number}) {

    async function handleUpdateCount(){
        const result = await updateProductCart(id, newCount);
        if(result){
            toast.success(`Product count ${isIncrement ? "Incremented" : "Decremented"} Successfuly`, {position:"top-right", duration:3000, style:{color:"green"}, closeButton:true})
            return result;
    }
    else{
        toast.error(`Product count failed to ${isIncrement ? "Increment" : "Decrement"}`, {position:"top-right", duration:3000, style:{color:"red"}, closeButton:true})
    }
}

  return (
        <Button variant={"outline"} onClick={handleUpdateCount} disabled={newCount <= 0} className={isIncrement ? "hover:bg-green-500 hover:text-white p-3 " :"hover:bg-red-500 hover:text-white p-3 "}>{isIncrement ? "+" : "-"}</Button>
  )
}

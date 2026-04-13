'use client'
import { Button } from '_/components/ui/button'
import React, { MouseEvent, ReactNode, useState } from 'react';
import { addProductToCart } from '_/app/cart/cart.action';
import { toast } from 'sonner';
import { useCart } from '_/app/_Context/CartContext';
import { Loader2 } from 'lucide-react';

interface AddToCartProps{
  id:string,
  classNames?:string,
  children: ReactNode
}


export default  function AddToCartButton({id ,classNames="", children }:AddToCartProps) {

    const {updateNumOfCartUi, incrementCartCount, decrementCartCount} = useCart();
    const [isPending, setIsPending] = useState(false);

    async function handleClick(e:MouseEvent) {
        
        e.preventDefault();
        
        // Optimistic Update
        incrementCartCount();
        const toastId = toast.loading("Adding to cart...");
        
        setIsPending(true);
        try {
          const newItemsCount = await addProductToCart(id);
          if(newItemsCount > 0){
            // Server confirmed, sync with exact count just in case
            updateNumOfCartUi(newItemsCount)
            toast.success("Product added Successfuly", {
              id: toastId,
              duration: 3000,
              style: { color: "green" },
              closeButton: true,
            });
          }
          else{
            // Rollback
            decrementCartCount();
            toast.error("Product added Failed", { id: toastId });
          }
        } catch (error) {
          // Rollback
          decrementCartCount();
          toast.error("An error occurred", { id: toastId });
        } finally {
          setIsPending(false);
        }

    }

  return (
    <>
      <Button 
        className={classNames}  
        onClick={ handleClick } 
        variant="outline" 
        disabled={isPending}
      >
        {isPending ? <Loader2 className="animate-spin" /> : children}
      </Button>
    </>
  )
}

'use client'
import { Button } from '_/components/ui/button'
import { MouseEvent, ReactNode } from 'react';
import { removeProductFromCart } from '_/app/cart/cart.action';
import { toast } from 'sonner';
import { useCart } from '_/app/_Context/CartContext';
interface deleteFromCartProps{
  id:string,
  classNames?:string,
  children: ReactNode
}


export default  function DeleteFromCartButton({id ,classNames="", children }:deleteFromCartProps) {

    const {updateNumOfCartUi} = useCart();
    
    async function handleClick(e:MouseEvent) {
      e.preventDefault();
      const res = await removeProductFromCart(id);
      
      updateNumOfCartUi(res);
      
      if(res > 0 || (res === 0 && id !== "all")) {
        toast.success("Product deleted successfully", {
          duration: 3000,
          position: "top-right",
          style: { color: "green" },
        });
      } else {
      }
    }  

  return (
    <>
          <Button className={classNames}  onClick={ handleClick } variant="outline" >
        
        {children}
         </Button>
    </>
  )
}

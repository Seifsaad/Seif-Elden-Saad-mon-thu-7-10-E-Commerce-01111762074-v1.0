import React from 'react'
import { getCart } from '_/Api/route.services';
import CartProductCard from './CartProductCard';


export default async function CartProductPart() {



const cartDetails = await getCart();
  const products = cartDetails?.products || [];
  const totalCartPrice = cartDetails?.totalCartPrice || 0;
  // console.log("cart details from checkout page", cartDetails);
  return (
    <div className='grid  gap-6 px-4 md:px-10 w-full py-15 '>
        {products?.map(product=> <div key={product._id} >  <CartProductCard  product={product}  />
        </div> )}
    </div>
  )
}

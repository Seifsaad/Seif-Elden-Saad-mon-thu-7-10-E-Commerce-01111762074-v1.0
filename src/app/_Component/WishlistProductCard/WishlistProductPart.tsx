import React from 'react'
import { getWishlist } from '_/Api/route.services';
import WishlistProductCard from './WishlistProductCard';

export default async function WishlistProductPart() {
  const wishlistDetails = await getWishlist();
  const products = wishlistDetails?.data || [];

  return (
    <div className='flex flex-col gap-6 w-full py-10'>
        {products.length > 0 ? (
            products.map(product => (
                <div key={product.id}>
                    <WishlistProductCard product={product} />
                </div>
            ))
        ) : (
            <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                <p className="text-xl text-gray-500">Your wishlist is empty</p>
            </div>
        )}
    </div>
  )
}

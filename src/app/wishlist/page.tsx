import React from 'react'
import WishlistProductPart from '../_Component/WishlistProductCard/WishlistProductPart';
import Link from 'next/link';
import { IoCart } from 'react-icons/io5';
import { getWishlist } from '_/Api/route.services';

export default async function WishlistPage() {
    const wishlist = await getWishlist()
    return (
        <div >
            <div className="flex flex-col gap-4 md:flex-row px-2 md:px-4 md:gap-4 py-8">
                <div className="flex flex-col gap-2">
                    <h5>
                        <Link className="cursor-pointer text-gray-400 " href="/">
                            Home{" "}
                        </Link>
                        / Wishlist
                    </h5>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 justify-center items-center rounded-lg p-1 flex text-4xl text-white bg-linear-to-l from-green-800 to-green-600">
                            <IoCart />
                        </div>
                        <h1 className="text-3xl font-semibold">My Wishlist</h1>
                    </div>
                    <h3 className="text-gray-400">
                        You have{" "}
                        <span className="text-green-500">{wishlist?.data?.length} items</span> in
                        your wishlist
                    </h3>
                </div>
            </div>
            <WishlistProductPart />
        </div>
    )
}
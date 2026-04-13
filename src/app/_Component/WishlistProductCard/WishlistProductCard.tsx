import React from "react";
import { Product } from "./../../../Api/types.services";
import { MdDelete } from "react-icons/md";
import AddToCartButton from "../Button/AddToCartButton";
import DeleteFromWishlistButton from "../Button/DeleteFromWishlistButton";

export default async function WishlistProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col items-center gap-2 py-4 px-2 md:px-4 md:py-6  border border-secondary rounded-md shadow-sm bg-white">
      <div className="flex w-full p-2 gap-2">
        <img
          className="h-40 md:h-60 object-contain"
          src={product.imageCover}
          alt={product.title}
        />
        <div className="flex flex-col w-3/4 p-3 gap-2">
          <h1 className="font-semibold text-lg">{product.title}</h1>
          <h5 className="w-fit bg-green-100 text-green-500 text-center px-4 py-1 rounded-full text-sm">
            {product.category?.name}
          </h5>
          <div className="flex gap-6 p-2 items-center">
            <h1 className="text-2xl font-bold text-green-600 ">
              {product.price} EGP
            </h1>
          </div>
          
          <div className="mt-auto">
            <AddToCartButton 
              id={product.id} 
              classNames="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-6 py-2 rounded-lg transition-colors border-none"
            >
              Add to Cart
            </AddToCartButton>
          </div>
        </div>
        
        <div className="flex flex-col flex-1 justify-between items p-3 gap-3">
          <div>
            {product.quantity > 0 ? (
              <div className="bg-green-500 text-white text-xs text-center px-3 py-1 rounded-full "> 
                <span>In stock</span> 
              </div>
            ) : (
              <div className="bg-red-500 text-white text-xs text-center px-3 py-1 rounded-full "> 
                <span>Out of stock</span> 
              </div>
            )}
          </div>
          
          <DeleteFromWishlistButton 
            classNames="bg-red-50 hover:bg-red-100 text-red-500 flex justify-center items-center py-3 rounded-lg cursor-pointer text-2xl border-red-200 transition-colors" 
            id={product.id}
          >
            <MdDelete />
          </DeleteFromWishlistButton>
        </div>
      </div>
    </div>
  );
}

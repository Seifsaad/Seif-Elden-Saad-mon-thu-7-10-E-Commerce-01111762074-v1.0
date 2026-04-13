import React from "react";
import { ProductProps } from "./Product.types";
import { FaStar } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { Button } from "_/components/ui/button";
import AddToCartButton from "../Button/AddToCartButton";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import WishlistButton from "../Button/WishlistButton";
import { decodeUserToken } from "_/app/utils";
import Link from "next/link";



export default async function ProductCard({ product }: ProductProps) {
  const userToken = await decodeUserToken()
  return (
    <div className="flex flex-col items-center gap-2 border border-secondary rounded-md p-1 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col w-full px-4 py-2 gap-2 relative">
        <img className="w-3/4 mx-auto h-48 object-cover" src={product.images[0]} alt={product.title} />
        <WishlistButton id={product.id} classNames=" rounded-full shadow-sm cursor-pointer hover:text-red-500 transition-colors absolute top-2 right-2" >
          <FaRegHeart />
        </WishlistButton>
        <div className="">
          <h5 className="text-gray-500">{product.category.name}</h5>
          <h3>{product.title.split(" ").slice(0, 3).join(" ")}</h3>
          <div className="flex gap-3">
            {/* {stars} */}
            {Array.from({ length: Math.floor(product.ratingsAverage || 0) }).map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
            <p className="text-gray-500">{product.ratingsAverage}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">{product.price} EGP</h4>
            {userToken ? (
              <AddToCartButton id={product.id} classNames="w-10 h-10 text-xl cursor-pointer  text-green-500 hover:bg-green-500 hover:text-white ">
                +
              </AddToCartButton>
            ) : (
              <Link href="/login" className="w-10 h-10 text-xl flex justify-center rounded-lg items-center cursor-pointer text-green-500 hover:bg-green-500 hover:text-white ">
                +
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

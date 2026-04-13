import React from "react";
import { Item } from "./../../../Api/types.services";
import { MdDelete } from "react-icons/md";
import DeleteFromCartButton from "../Button/DeleteFromCartButton";
import UpdateProductCountButton from "_/app/cart/UpdateProductCountButton";

export default async function CartProductCard({ product: item }: { product: Item }) {
  

  return (
    <>
      <div className="flex flex-col items-center gap-2 border border-secondary rounded-md shadow-sm ">
        <div className="flex w-full p-2 gap-2 ">
          <img
            className="h-40 md:h-60 object-contain"
            src={item.product.imageCover}
            alt={item.product.title}
          />
          <div className="flex flex-col w-3/4 p-3 gap-2">
            <h1>{item.product.title}</h1>
            <h5 className="w-fit bg-green-100 text-green-500 text-center px-4 py-1 rounded-full">
              {item.product.category?.name}
            </h5>
            <div className="flex gap-6 p-2 items-center">
              <h1 className="text-2xl font-semibold text-green-500 ">
                {item.price * item.count} EGP
              </h1>
              <div className="flex items-center gap-1">
              <h4 className="text-sm font-semibold text-green-500 ">{item.price}</h4>
              <h4 className="text-gray-500">Per unit</h4>
              </div>
            </div>
            <div className="flex items-center shadow-sm px-3 py-2 w-fit rounded-xl gap-3">
              <UpdateProductCountButton isIncrement={false} id={item.product.id} newCount={item.count -1} />
              <h1>{item.count}</h1>
              <UpdateProductCountButton isIncrement={true} id={item.product.id} newCount={item.count +1} />
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-between items p-3 gap-3">
            <div>
            {item.product.quantity > 0 ? <div className="bg-green-500 text-white text-center px-3 py-2 rounded-2xl "> <span> In stock</span> </div>: <div className="bg-red-500 text-white px-3 py-2 text-center rounded-2xl "> <span>Out of stock</span> </div>}
            
        </div>
            <DeleteFromCartButton classNames="bg-red-500 hover:bg-red-800 text-white hover:text-white flex justify-center items-center py-5  rounded-lg cursor-pointer text-2xl" id={item.product.id}>
              <MdDelete />
            </DeleteFromCartButton>
          
          </div>
        </div>
      </div>
    </>
  );
}

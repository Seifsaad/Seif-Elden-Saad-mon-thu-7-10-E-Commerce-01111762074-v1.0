import { getCart } from "_/Api/route.services";
import { CartResponse } from "_/Api/types.services";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import CartProductPart from "../_Component/CartProductCard/CartProductPart";
import DeleteAllButton from "./DeleteAllButton";
import { FaLock } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

export default async function page() {

const cartDetails = await getCart();
  const products = cartDetails?.products || [];
  const totalCartPrice = cartDetails?.totalCartPrice || 0;
  console.log("cart details from cart page", cartDetails);
  
  return (
    <div className="flex flex-col gap-4 md:flex-row px-2 md:px-4 justify-center md:gap-4 py-8">
      <div className="flex flex-col md:w-3/4 gap-4 py-8 px-4 ">
        <div className="flex flex-col gap-2">
          <h5>
            <Link className="cursor-pointer text-gray-400 " href="/">
              Home{" "}
            </Link>
            / Shopping Cart
          </h5>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 justify-center items-center rounded-lg p-1 flex text-4xl text-white bg-linear-to-l from-green-800 to-green-600">
              <IoCart />
            </div>
            <h1 className="text-3xl font-semibold">Shopping Cart</h1>
          </div>
          <h3 className="text-gray-400">
            You have{" "}
            <span className="text-green-500">{products?.length} items</span> in
            your cart
          </h3>
        </div>
        <CartProductPart />
      <hr  className="py-2"/>
      <div className="flex items-center justify-between gap-2 px-3" >
        <Link href="/" className="flex items-center gap-2 text-green-500 hover:text-green-800 transition-colors">
        <FaArrowLeftLong />
        <span className="cursor-pointer transition-colors">Continue shopping</span>
        </Link>
        <DeleteAllButton/>
      </div>
      </div>
      <div>
        <div>
          <main className="grow pt-24 pb-32 px-4 md:px-8">
            <div className="max-w-md mx-auto">
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                <div className="bg-linear-to-l from-green-700 to-green-500 p-6 text-white">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="material-symbols-outlined"
                    >
                      <FaBagShopping />
                    </span>
                    <h2 className="text-2xl font-bold headline">
                      Order Summary
                    </h2>
                  </div>
                  <p className="text-sm opacity-90 font-medium">
                    You have {products?.length} items in your cart
                  </p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="bg-blue-50 flex items-center text-green-500 gap-3 p-4 rounded-lg">
                    {totalCartPrice > 1000 ? <><span
                      className="material-symbols-outlined  text-2xl"
                    >
                      <MdLocalShipping  />
                    </span>
                    <p className="text-green-500 text-md font-medium">
                      Free Shipping! <br /> You are eligible for free shipping</p></> : <><span
                      className="material-symbols-outlined text-blue-500 text-2xl"
                    >
                      <MdLocalShipping  />
                    </span>
                    <p className="text-md text-blue-500 font-medium">
                      buy more than 1000 EGP to be eligible for free
                    </p></>

                    }
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface-variant font-medium">
                        Subtotal
                      </span>
                      <span className="text-on-surface font-semibold">
                        {totalCartPrice} EGP
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface-variant font-medium">
                        Shipping
                      </span>
                      <span className="text-primary font-bold">{totalCartPrice > 1000 ? "Free" : "100 EGP"}</span>
                    </div>
                    <div className="h-px bg-surface-variant w-full my-4 opacity-50" />
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold headline text-on-surface">
                        Total
                      </span>
                      <span className="text-xl font-extrabold headline text-on-surface">
                        {totalCartPrice > 1000 ? totalCartPrice : totalCartPrice + 100} EGP
                        {/* {RightPromoCode ? totalCartPrice > 1000 ? totalCartPrice + 100 +500 : totalCartPrice + 500 : totalCartPrice} EGP */}
                      </span>
                    </div>
                  </div>
                  {/* <Input id='Promo' className="w-full rounded-lg border border-surface-variant px-2 py-6 focus-visible:ring-1 focus-visible:ring-green-500" type="text" placeholder="Enter your promo code" /> */}

                  <Link href={products?.length === 0 ? "/" : "/checkout"} className="w-full bg-linear-to-l from-green-800 to-green-600 cursor-pointer hover:bg-linear-to-l hover:from-green-700 hover:to-green-500 transition-colors text-white py-5 rounded-full flex items-center justify-center gap-3 headline font-bold text-lg shadow-lg shadow-primary/20 active:scale-95 transition-all">
                    <span
                      className="material-symbols-outlined"
                      
                    >
                      <FaLock />
                    </span>
                    Secure Checkout
                  </Link>
                  <div className="flex justify-center py-5 gap-4 pt-4">
                    <div className="flex items-center gap-2 justify-center">
                      <span
                        className="material-symbols-outlined text-primary text-xl"
                      >
                        <FaShieldAlt className="text-green-500" />
                      </span>
                      <span className="text-sm">
                        Secure Payment
                      </span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <span
                        className="material-symbols-outlined text-primary text-xl"
                        
                      >
                        <MdLocalShipping className="text-blue-500" />
                      </span>
                      <span className="text-sm ">
                        Fast Delivery
                      </span>
                    </div>
                  </div>
                </div>
              <Link
                className="py-6 flex items-center justify-center gap-2 text-mf text-green-700 hover:text-green-500 transition-colors"
                href="/"
                >
                <FaArrowLeftLong />
                <span>Continue shopping</span>
              </Link>
                </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

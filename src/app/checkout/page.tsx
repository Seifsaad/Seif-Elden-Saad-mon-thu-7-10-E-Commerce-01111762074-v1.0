import Link from "next/link";
import React from "react";
import { FaReceipt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import CheckoutForm from "./CheckoutForm";
import { getCart } from "_/Api/route.services";



export default async function checkout() {
  
  const cartDetails = await getCart();
  const products = cartDetails?.products || [];
  const totalCartPrice = cartDetails?.totalCartPrice || 0;
  // console.log("cart details from checkout page", cartDetails);



  return (
    <div>
      <main className="pt-10 pb-20 px-6 max-w-7xl mx-auto">
      <span className="flex items-center gap-2 text-sm mb-4"><Link className="text-gray-500" href="/">Home</Link>/<Link className="text-gray-500" href="/cart">Cart</Link>/<span className="text-primary font-medium">Checkout</span></span>
        <div className="mb-10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
          <div className="w-10 h-10 justify-center items-center rounded-lg p-2 flex text-4xl text-white bg-linear-to-l from-green-800 to-green-600">
          <FaReceipt className=""/>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            Complete Your Order
          </h1>
          </div>
          <Link
            className="text-green-500 hover:text-green-700 font-medium flex items-center gap-1 group"
            href="/cart"
          >
            <span
              className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform"
              data-icon="arrow_back"
            >
              <FaArrowLeftLong/>
            </span>
            Back to Cart
          </Link>
        </div>
        <CheckoutForm products={products} totalCartPrice={totalCartPrice} />
      </main>
    </div>
  );
}

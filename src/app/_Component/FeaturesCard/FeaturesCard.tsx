import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

export default function FeaturesCard() {
  return (
    <div className="bg-gray-50 py-6">
      <div className="grid md:grid-cols-2  lg:grid-cols-4 container mx-auto gap-4 p-4">
        <div className="flex items-center gap-2 border border-secondary rounded-md p-4 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 text-blue-500 text-2xl bg-blue-100 rounded-full flex justify-center items-center">
            <MdLocalShipping />
          </div>
          <div>
            <h3 className="font-semibold">Free Shipping</h3>
            <p className="text-xs text-gray-500">On orders over 500 EGP</p>
          </div>
        </div>
        <div className="flex  items-center gap-2 border border-secondary rounded-md p-4 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 text-green-500 text-2xl bg-green-100 rounded-full flex justify-center items-center">
            <FaShieldAlt />
          </div>
          <div>
            <h3 className="font-semibold">Secure Payment</h3>
            <p className="text-xs text-gray-500">100% secure transactions</p>
          </div>
        </div>
        <div className="flex  items-center gap-2 border border-secondary rounded-md p-4 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 text-orange-500 text-2xl bg-orange-100 rounded-full flex justify-center items-center">
            <RiRefund2Line />
          </div>
          <div>
            <h3 className="font-semibold">Easy Returns</h3>
            <p className="text-xs text-gray-500">14-day return policy</p>
          </div>
        </div>
        <div className="flex  items-center gap-2 border border-secondary rounded-md p-4 shadow-sm hover:shadow-md transition-all">
          <div className="w-12 h-12 text-violet-500 text-2xl bg-violet-100 rounded-full flex justify-center items-center">
            <BiSupport />
          </div>
          <div>
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-xs text-gray-500">Dedicated support team</p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../components/ui/collapsible";
import { FaChevronDown, FaChevronUp, FaCreditCard, FaMoneyBill1Wave, FaReceipt } from "react-icons/fa6";
import { LuPackage } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";


export default function OrderCard({ myOrders }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const order = myOrders || {};
  const cartItems = order?.cartItems || [];
  const firstItem = cartItems[0];
  const itemsCount = cartItems.length;

  const orderId = order?.id || order?._id?.slice(-5) || "N/A";
  const status = order?.isDelivered ? "Delivered" : "Processing";



  const city = order?.shippingAddress?.city || "Unknown City";
  const details = order?.shippingAddress?.details || "No details";
  const phone = order?.shippingAddress?.phone || "No phone";
  const totalOrderPrice = order?.totalOrderPrice || 0;
  const shippingPrice = order?.shippingPrice || 0;
  const subtotal = totalOrderPrice - shippingPrice;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={`border rounded-2xl p-4 md:p-6 mb-4 transition-all duration-300 ${isOpen ? "border-green-200" : "border-gray-200"
        } bg-white shadow-sm hover:shadow-md`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="relative border border-gray-100 bg-gray-50 rounded-xl p-2 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shrink-0">
            {itemsCount > 1 && (
              <span className="absolute -top-2 -left-2 bg-slate-800 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center z-10 border-2 border-white">
                +{itemsCount - 1}
              </span>
            )}
            {firstItem?.product?.imageCover ? (
              <Image
                src={firstItem.product.imageCover}
                alt={firstItem.product.title || "Product Image"}
                className="w-full h-full object-contain"
                width={100}
                height={100}
                priority
              />
            ) : (
              <LuPackage className="text-3xl text-gray-400" />
            )}
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between w-full">
              <span className="bg-amber-100 text-amber-600 font-medium text-xs px-2 py-1 rounded-md mb-2 w-fit">
                {status}
              </span>
              <button className="sm:hidden w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
                <FaReceipt className="text-sm" />
              </button>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-1"># {orderId}</h2>

            <p className="text-sm text-gray-500 flex items-center flex-wrap gap-1 mb-2">
              <span className="text-gray-300">•</span>
              <span>{itemsCount} item{itemsCount !== 1 && 's'}</span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1"><CiLocationOn /> {city}</span>
            </p>

            <p className="text-xl font-bold text-gray-900 mt-2">
              {totalOrderPrice.toLocaleString()} <span className="text-xs font-normal">EGP</span>
            </p>
          </div>
        </div>

        <div className="flex sm:flex-col items-end justify-between sm:justify-start gap-4 h-full">
          <button className="hidden sm:flex w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 items-center justify-center text-gray-500 transition-colors">
            {myOrders.paymentMethodType === "cash" ? <FaMoneyBill1Wave className="text-sm" /> : <FaCreditCard className="text-sm" />}
          </button>

          <CollapsibleTrigger asChild>
            <button
              className={`flex items-center gap-2 px-4 py-2 mt-auto sm:mt-12 rounded-lg text-sm font-medium transition-colors ${isOpen
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
            >
              {isOpen ? "Hide" : "Details"}
              {isOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
            </button>
          </CollapsibleTrigger>
        </div>
      </div>

      <CollapsibleContent className="animate-in fade-in transition-all duration-300 mt-6 pt-6 border-t border-gray-100">

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-100 p-1.5 rounded-md">
              <FaReceipt className="text-green-600 text-[10px]" />
            </div>
            <h3 className="font-semibold text-gray-800 text-sm">Order Items</h3>
          </div>

          <div className="flex flex-col gap-4">
            {cartItems.map((item: any, index: number) => (
              <div key={item._id || index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div className="flex items-center gap-3">
                  <div className="border border-gray-100 bg-gray-50 p-2 rounded-lg w-16 h-16 flex items-center justify-center shrink-0">
                    {item.product?.imageCover ? (
                      <img src={item.product?.imageCover} alt={item.product?.title} className="w-full h-full object-contain" />
                    ) : (
                      <LuPackage className="text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-medium line-clamp-1">{item.product?.title || 'Unknown Product'}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.count} × {item.price} EGP</p>
                  </div>
                </div>
                <div className="text-right sm:text-right whitespace-nowrap">
                  <p className="font-bold text-gray-900">{(item.count * item.price).toLocaleString()} <span className="text-xs font-normal">EGP</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-50 rounded-xl p-4 bg-gray-50/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-blue-100 p-1.5 rounded-full">
                <CiLocationOn className="text-blue-500 text-xs font-bold" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Delivery Address</h3>
            </div>
            <p className="text-gray-900 font-medium text-sm mb-1">{city}</p>
            <p className="text-xs text-gray-500 mb-1">{details}</p>
            <p className="text-xs text-gray-500">
              {phone}
            </p>
          </div>

          <div className="rounded-xl p-4 bg-amber-50 md:min-h-full flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-100 p-1.5 rounded-full">
                <FaReceipt className="text-orange-500 text-[10px]" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Order Summary</h3>
            </div>

            <div className="flex justify-between items-center text-sm mb-2 text-gray-600">
              <span>Subtotal</span>
              <span>{subtotal.toLocaleString()} EGP</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-4 text-gray-600 border-b border-orange-200/50 pb-4">
              <span>Shipping</span>
              <span className="text-gray-900 font-medium">{subtotal > 1000 ? "Free" : shippingPrice + " EGP"}</span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg text-gray-900">
              <span>Total</span>
              <span>{totalOrderPrice.toLocaleString()} EGP</span>
            </div>
          </div>
        </div>

      </CollapsibleContent>
    </Collapsible>
  );
}
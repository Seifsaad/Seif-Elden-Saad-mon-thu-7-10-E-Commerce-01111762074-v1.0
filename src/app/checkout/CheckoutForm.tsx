"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "_/components/ui/field";
import { Input } from "_/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { checkoutSchema } from "./checkout.schema";
import { createCashOrder, createCheckoutPayment } from "./checkout.action";
import { toast } from "sonner";
import { CheckoutFormObject } from "./checkout.types";
import { useRouter } from "next/navigation";
import { useCart } from "../_Context/CartContext";
import React, { useState } from "react";
import { FaRegCreditCard, FaArrowRotateLeft, FaMoneyBill1Wave } from "react-icons/fa6";
import { MdAttachMoney, MdLocalShipping } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

interface CheckoutFormProps {
  products: any[];
  totalCartPrice: number;
}

export default function CheckoutForm({ products, totalCartPrice }: CheckoutFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online">("cash");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      shippingAddress: {
        city: "",
        details: "",
        phone: "",
        postalCode: "",
      },
    },
    resolver: zodResolver(checkoutSchema),
  });

  const router = useRouter();
  const { updateNumOfCartUi } = useCart();

  async function handleCheckout(data: CheckoutFormObject) {
    setIsSubmitting(true);
    try {
      if (paymentMethod === "cash") {
        const result = await createCashOrder(data);
        if (result) {
          updateNumOfCartUi(0);
          toast.success("Order Placed Successfully", {
            duration: 3000,
            position: "top-right",
            style: { color: "green" },
          });
          setTimeout(() => {
            router.push("/");
          }, 2000);
        } else {
          toast.error("Checkout failed");
        }
      } else {
        // Online Payment
        const result = await createCheckoutPayment(data);
        if (result?.status === "success") {
          toast.info("Redirecting to payment...");
          window.location.href = result.session.url;
        } else {
          toast.error("Failed to initialize payment");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during checkout");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-8">
        <form id="checkout-form" onSubmit={handleSubmit(handleCheckout)} className="space-y-8">
          <section className="overflow-hidden">
            <div className="bg-linear-to-l from-green-800 to-green-600 px-6 py-4 rounded-t-xl">
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                <FaHouseChimney />
                Shipping Address
              </h2>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/15 rounded-b-xl shadow-sm space-y-4">
              <Controller
                name="shippingAddress.city"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="city">City</FieldLabel>
                    <Input
                      {...field}
                      id="city"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your city"
                      autoComplete="off"
                      className="focus-visible:ring-2 focus-visible:ring-green-500"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <Controller
                name="shippingAddress.details"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="details">Street Address / Details</FieldLabel>
                    <Input
                      {...field}
                      id="details"
                      aria-invalid={fieldState.invalid}
                      placeholder="123 Fresh Lane, Suite 100"
                      autoComplete="off"
                      className="focus-visible:ring-2 focus-visible:ring-green-500"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Controller
                  name="shippingAddress.phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                      <Input
                        {...field}
                        id="phone"
                        aria-invalid={fieldState.invalid}
                        placeholder="01xxxxxxxxx"
                        autoComplete="off"
                        className="focus-visible:ring-2 focus-visible:ring-green-500"
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
                <Controller
                  name="shippingAddress.postalCode"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="postalCode">Postal Code</FieldLabel>
                      <Input
                        {...field}
                        id="postalCode"
                        aria-invalid={fieldState.invalid}
                        placeholder="12345"
                        autoComplete="off"
                        className="focus-visible:ring-2 focus-visible:ring-green-500"
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
              </div>
            </div>
          </section>
          <section className="overflow-hidden">
            <div className="bg-primary px-6 py-4 rounded-t-xl">
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                <MdAttachMoney />
                Payment Method
              </h2>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/15 rounded-b-xl shadow-sm space-y-4">
              <label
                className={`flex items-center justify-between p-5 border rounded-xl cursor-pointer transition-all ${paymentMethod === "cash" ? "border-primary bg-primary-container/10" : "border-outline-variant/20"
                  }`}
                onClick={() => setPaymentMethod("cash")}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    checked={paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                    className="w-5 h-5 text-primary"
                  />
                  <div className="flex items-center gap-3">
                    <FaMoneyBill1Wave className="text-primary text-xl" />
                    <span className="font-bold text-on-surface">Cash on Delivery</span>
                  </div>
                </div>
              </label>
              <label
                className={`flex items-center justify-between p-5 border rounded-xl cursor-pointer transition-all ${paymentMethod === "online" ? "border-primary bg-primary-container/10" : "border-outline-variant/20"
                  }`}
                onClick={() => setPaymentMethod("online")}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    checked={paymentMethod === "online"}
                    onChange={() => setPaymentMethod("online")}
                    className="w-5 h-5 text-primary"
                  />
                  <div className="flex items-center gap-3">
                    <FaRegCreditCard className="text-xl" />
                    <span className="font-bold text-on-surface">Pay Online</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-5 bg-secondary-container rounded opacity-60" />
                  <div className="w-8 h-5 bg-secondary-container rounded opacity-60" />
                </div>
              </label>
            </div>
          </section>
        </form>
      </div>
      <div className="lg:col-span-4">
        <div className="sticky top-28 space-y-6">
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/15 rounded-xl shadow-lg">
            <h3 className="text-xl font-extrabold mb-6 border-b border-surface-container-high pb-4">
              Order Summary
            </h3>
            <div className="space-y-5 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {products.map((product: any) => (
                <div className="flex gap-4" key={product._id}>
                  <div className="w-16 h-16 bg-surface-container-low rounded-lg overflow-hidden shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      src={product.product.imageCover}
                      alt={product.product.title}
                    />
                  </div>
                  <div className="grow">
                    <p className="text-sm font-bold leading-tight line-clamp-2">
                      {product.product.title}
                    </p>
                    <p className="text-xs text-on-surface-variant">Qty: {product.count}</p>
                    <p className="text-sm font-extrabold mt-1 text-primary">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-surface-container-high pt-6 mb-8">
              <div className="flex justify-between text-on-surface-variant">
                <span>Subtotal</span>
                <span className="font-medium">{totalCartPrice.toFixed(2)} EGP</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Shipping</span>
                <span className="text-primary font-bold">
                  {totalCartPrice > 1000 ? "Free" : "100.00 EGP"}
                </span>
              </div>
              <div className="flex justify-between text-xl font-extrabold pt-2 text-on-surface">
                <span>Total</span>
                <span>
                  {(totalCartPrice > 1000 ? totalCartPrice : totalCartPrice + 100).toFixed(2)} EGP
                </span>
              </div>
            </div>

            <button
              type="submit"
              form="checkout-form"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 ${isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-linear-to-l from-green-800 to-green-600 hover:from-green-700 hover:to-green-500 cursor-pointer"
                }`}
            >
              {isSubmitting ? (
                <span className="animate-pulse">Processing...</span>
              ) : (
                <>
                  {paymentMethod === "cash" ? "Confirm Order" : "Pay Now"}
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-6 mt-10">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-green-500" />
                <p className="text-[10px] font-bold uppercase tracking-tighter opacity-70">Secure</p>
              </div>
              <div className="flex items-center gap-2">
                <MdLocalShipping className="text-blue-500" />
                <p className="text-[10px] font-bold uppercase tracking-tighter opacity-70">Fast Delivery</p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRotateLeft />
                <p className="text-[10px] font-bold uppercase tracking-tighter opacity-70">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FaFacebook, FaLock, FaShieldAlt, FaShippingFast, FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import LoginForm from "./LoginForm";
import CARTIMG from '_/assets/381609d78c4d97f9277837bc4bdf05035b888463.png'
import Image from "next/image";
import Link from "next/link";
import { HiMiniUserGroup } from "react-icons/hi2";

export default function Login() {
  return (
    <div className="flex flex-col gap-2 md:flex-row px-2 md:px-4 justify-center md:gap-4 py-8">
      <div className="md:flex flex-col gap-4 rounded-lg justify-center items-center shadow-md md:w-200 p-8 hidden" >
          <div>
            <Image src={CARTIMG} alt="cart" width={400} height={300} className="mx-auto shadow rounded-xl object-fill" />
          </div>
          <h2 className="text-2xl font-semibold flex flex-col">FreshCart - Your One-Stop Shop for Fresh Products</h2>
          <p>Join thousands of happy customers who trust FreshCart for their daily grocery needs</p>
          <div className="flex gap-8 my-5">
            <div className="flex gap-2 items-center">
              <FaShippingFast className="text-green-500"/>
              <p>Free Delivery</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaShieldAlt className="text-green-500"/>
              <p>Secure Payment</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaStar className="text-green-500"/>
              <p>Premium Quality</p>
            </div>
          </div>
      </div>
      <div className="flex flex-col text-center gap-2 rounded-lg md:w-120 shadow-md p-10 ">
        <h2 className="text-2xl font-semibold"><span className="text-green-500">Fresh</span> cart</h2>
        <h3>Welcome Back!</h3>
        <p className="text-gray-500">Sign in to continue your shopping experience</p>
        <div className="flex mx-auto gap-4 my-5" >
          <div className="flex items-center shadow px-8 hover:shadow-md transition-all cursor-pointer py-2 rounded-xl gap-2">
            <div className="text-red-500">
            <FaGoogle/>
            </div>
            <p className="font-semibold">Google</p>
          </div>
          <div className="flex  items-center shadow px-8 hover:shadow-md transition-all cursor-pointer py-2 rounded-xl gap-2">
            <div className="text-blue-500">
            <FaFacebook/>
            </div>
            <p className="font-semibold">Facebook</p>
          </div>
        </div>
        <div className="gap-4 flex items-center justify-center">
          <hr className="w-1/3" /><p className="my-2">or</p><hr className="w-1/3" />
        </div>
        <LoginForm  />
        <hr className="my-4" />
        <div className="flex justify-center gap-1">
          <p>New to FreshCart?</p>
          <Link href="/login" className="text-green-500">
            Create an account
          </Link>
        </div>
          <div className="flex gap-4 my-2 justify-center">
            <div className="flex gap-1 items-center">
              <FaLock className="text-gray-700"/>
              <p className="text-md">SSL Secured</p>
            </div>
            <div className="flex gap-1 items-center">
              <HiMiniUserGroup className="text-gray-700"/>
              <p className="text-md">+50k Users</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaStar className="text-gray-700"/>
              <p className="text-md">4.9 Rating</p>
            </div>
          </div>
      </div>
    </div>
  );
}

import React from "react";
import { FaFacebook, FaShieldAlt, FaStar } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import RegisterForm from "./RegisterForm";
import REVIEWER from '_/assets/7be87acff8878d0ff905ef9dcd5bf7d2fd7a6c6f.png'
import Image from "next/image";

export default function Register() {

  

  return (
    <div className="flex flex-col gap-2 md:flex-row px-2 md:px-4 justify-center md:gap-4 py-10">
      <div className="flex flex-col gap-2 rounded-lg shadow-md md:w-200 p-8" >
        <h1 className="text-3xl font-semibold flex flex-col md:flex-row">
          Welcome to <span className="text-green-500">Fresh Cart</span>
        </h1>
        <p>
          Join thousands of happy customers who enjoy fresh groceries delivered
          right to their doorstep.
        </p>
        <div className="flex flex-col gap-4 my-5">
          <div className="flex gap-4">
            <div className="text-green-800 h-10 w-10 bg-green-100 rounded-full flex justify-center items-center">
              <FaStar />
            </div>
            <div className="flex flex-col gap-.5">
              <h5 className="font-semibold">Premium Quality</h5>
              <p>Premium quality products sourced from trusted suppliers.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 my-5">
          <div className="flex gap-4">
            <div className="text-green-800 h-10 w-10 bg-green-100 rounded-full flex justify-center items-center">
              <MdLocalShipping />
            </div>
            <div className="flex flex-col gap-.5">
              <h5 className="font-semibold">Premium Quality</h5>
              <p>Same-day delivery available in most areas</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 my-5">
          <div className="flex gap-4">
            <div className="text-green-800 h-10 w-10 bg-green-100 rounded-full flex justify-center items-center">
              <FaShieldAlt />
            </div>
            <div className="flex flex-col gap-.5">
              <h5 className="font-semibold">Premium Quality</h5>
              <p>Your data and payments are completely secure</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4 my-5">
            <div className="flex gap-4">
              <Image className="w-15 h-15 rounded-full" src={REVIEWER} alt="reviewer" />
              <div className="flex flex-col gap-2">
                <h4>John Doe</h4>
                <div className="flex gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <p>
              Fresh Cart has transformed my grocery shopping experience. The
              quality of the products is outstanding, and the delivery is always
              on time.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center gap-2 rounded-lg md:w-120 shadow-md p-10 ">
        <h2>Create Your Account</h2>
        <p>Start your fresh journey with us today</p>
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
        <RegisterForm  />
      </div>
    </div>
  );
}

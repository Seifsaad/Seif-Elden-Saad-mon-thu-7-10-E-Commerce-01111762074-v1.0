import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaCreditCard, FaTwitter, FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
<footer className="bg-[#0a141d] pt-16 pb-8 text-slate-400 font-body">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
      <div className="col-span-2 lg:col-span-1">
        <div className="bg-white px-4 py-2 rounded mb-6 inline-block">
          <Link href="/" className="text-xl font-bold text-primary">FreshCart</Link>
        </div>
        <p className="text-xs leading-relaxed mb-6 max-w-xs">
          FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.
        </p>
        <div className="space-y-3 text-xs mb-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm"><FaPhone /></span>
            <span>+1 (800) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm"><MdEmail /></span>
            <span>support@freshcart.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm"><FaLocationDot /></span>
            <span>123 Commerce Street, New York, NY 10001</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Link className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="https://www.facebook.com"><span className="material-symbols-outlined text-sm"><FaFacebookF /></span></Link>
          <Link className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="https://www.twitter.com"><span className="material-symbols-outlined text-sm"><FaTwitter /></span></Link>
          <Link className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="https://www.instagram.com"><span className="material-symbols-outlined text-sm"><FaInstagram /></span></Link>
          <Link className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="https://www.youtube.com"><span className="material-symbols-outlined text-sm"><FaYoutube /></span></Link>
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Shop</h4>
        <ul className="space-y-4 text-xs">
          <li><Link className="hover:text-primary transition-colors" href="/products">All Products</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/categories">Categories</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/brands">Brands</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/electronics">Electronics</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/men">Men s Fashion</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/women">Women s Fashion</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Account</h4>
        <ul className="space-y-4 text-xs">
          <li><Link className="hover:text-primary transition-colors" href="/profile">My Account</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/allorders">Order History</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/wishlist">Wishlist</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/cart">Shopping Cart</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/login">Sign In</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/register">Create Account</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Support</h4>
        <ul className="space-y-4 text-xs">
          <li><Link className="hover:text-primary transition-colors" href="/contact">Contact Us</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/help">Help Center</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/shipping">Shipping Info</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/allorders">Returns &amp; Refunds</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/allorders">Track Order</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Legal</h4>
        <ul className="space-y-4 text-xs">  
          <li><Link className="hover:text-primary transition-colors" href="/privacy">Privacy Policy</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/terms">Terms of Service</Link></li>
          <li><Link className="hover:text-primary transition-colors" href="/cookie">Cookie Policy</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-wider">
      <p>© 2026 FreshCart. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm"><FaCreditCard /></span>
          <span>Visa</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm"><FaCreditCard /></span>
          <span>Mastercard</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm"><FaCreditCard /></span>
          <span>PayPal</span>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

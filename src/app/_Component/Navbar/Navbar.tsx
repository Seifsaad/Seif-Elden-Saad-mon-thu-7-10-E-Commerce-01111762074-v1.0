"use client"

import * as React from "react"
import Link from "next/link"
import { BsCart4 } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { useSession } from 'next-auth/react';
import LogOutButton from '_/app/_Component/Button/LogOutButton'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "_/components/ui/dropdown-menu"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "_/components/ui/navigation-menu"
import { useCart } from "_/app/_Context/CartContext";
import { useWishlist } from "_/app/_Context/WishlistContext";
import SearchInput from "../SearchInput/SearchInput";



export default function Navbar() {

  const { cartProductsCount } = useCart()
  const { wishlistProductsCount } = useWishlist()

  const session = useSession()
  const isUserAuthenticated = session.status === "authenticated";

  return (
    <NavigationMenu className="w-full bg-white py-8 max-w-none shadow justify-between px-5 lg:px-20 h-12 sticky top-0 z-50">
      <NavigationMenuList className="w-full">
        <Link href="/" className="flex gap-1">
          <BsCart4 className="text-2xl text-green-400" />
          <h1 className="text-xl font-semibold ">Fresh Cart</h1>
        </Link>
      </NavigationMenuList>
      <NavigationMenuList className="w-[500px]  flex justify-center ">
        <SearchInput />
      </NavigationMenuList>

      <NavigationMenuList className=" gap-6 flex ">
        <NavigationMenuItem className="hidden md:flex  text-black  ">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/products">Shop</Link>
          </NavigationMenuLink>
          <>
            <NavigationMenuTrigger >Categories</NavigationMenuTrigger>
            <NavigationMenuContent >
              <ul className="flex flex-col gap-3 p-3 w-40">
                <ListItem href="/categories" title="All Categories">
                </ListItem>
                <ListItem href="/" title="Electronics">
                </ListItem>
                <ListItem href="/" title="Women's Fashion">
                </ListItem>
                <ListItem href="/" title="Men's Fashion">
                </ListItem>
                <ListItem href="/" title="Beauty & Health">
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/brands">Brands</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuList className="flex gap-6">
          <Link href='/wishlist'>
            <div className="relative">
              <CiHeart className="text-2xl text-gray-500" />
              {isUserAuthenticated && wishlistProductsCount > 0 && <span className="absolute bottom-2 right-0 inline-flex items-center justify-center rounded-full h-3 w-3 p-2 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600">{wishlistProductsCount}</span>}
            </div>
          </Link>
          <Link href='/cart'>
            <div className='relative'>
              <FaCartShopping className="text-2xl text-gray-500" />
              {isUserAuthenticated && cartProductsCount > 0 && <span className="absolute bottom-2 right-0 inline-flex items-center justify-center rounded-full h-3 w-3 p-2 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600">{cartProductsCount}</span>}
            </div>
          </Link>

          <NavigationMenuItem>


            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* <Button className="bg-transparent border-0 focus-visible:ring-0">
        <CiMenuBurger  className="text-6xl text-gray-500 bg-green-500 "/>
    </Button> */}
                <CiMenuBurger className="text-2xl bg-green-600 rounded-full p-1.5 hover:bg-green-700 text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={22} align="center" >
                <DropdownMenuGroup>
                  {isUserAuthenticated ?
                    <>
                      <DropdownMenuItem>
                        <Link href="/allorders">My Orders</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/profile">Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:text-red-600">
                        <LogOutButton />
                      </DropdownMenuItem>
                    </>
                    :
                    <>
                      <DropdownMenuItem>
                        <Link href="/login">Sign In</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/register">Sign Up</Link>
                      </DropdownMenuItem>
                    </>
                  }
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

'use server';

import { cookies } from "next/headers";
import { LoginFormObject } from "./login.types";
import { useContext } from "react";
import { getCart, getWishlist } from "_/Api/route.services";




export async function LoginAction(data:LoginFormObject){

     try{
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
      const result = await res.json()
      console.log('result', result);
      // return res.ok
      if(res.ok){
        const cookie = await cookies()
        cookie.set('tkn', result.token ,{
          httpOnly: true,
          maxAge: 60 * 60 *24,
          sameSite:'lax',
        })
        return res.ok
      }

     }
     catch(error){
      console.log('error', error);
     }

}

export async function UpdatedLoggedUserCart(){
  return await getCart()      
}

export async function UpdatedLoggedUserWishlist(){
  return await getWishlist()      
}
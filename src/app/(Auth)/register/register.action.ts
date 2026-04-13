'use server';

import { RegisterFormObject } from "./register.types";




export async function RegisterAction(data:RegisterFormObject){

     try{
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
      const result = await res.json()
      console.log('result', res);
      return res.ok


     }
     catch(error){
      console.log('error', error);
     }

}
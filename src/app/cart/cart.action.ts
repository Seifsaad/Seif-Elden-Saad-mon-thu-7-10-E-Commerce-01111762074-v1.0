'use server'

import { revalidatePath } from "next/cache"
import { decodeUserToken } from "_/app/utils"


export async function addProductToCart(id:string){
    
    const bodyObj = {productId:id}
    const userToken = await decodeUserToken()


    if(userToken){

        try{
            const res= await fetch(`https://ecommerce.routemisr.com/api/v2/cart`,{
                method:"post",
                headers:{token: userToken, "content-type": "application/json" },
                body:JSON.stringify(bodyObj)

                
            })
            
            const result = await res.json()
            console.log("finalRes to add cart", result);
            return typeof result.numOfCartItems === 'number' ? result.numOfCartItems : 0;

    }
    catch(error){
        console.log('error', error);
    }
    }
    return 0;
}

export async function removeProductFromCart(id:string){

    const userToken = await decodeUserToken()
    console.log("userToken", userToken);
    if(userToken){

        try{
            const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${id}`,{
                method:"delete",
                headers:{token: userToken},
            })
            if(res.ok){

                const result = await res.json()
                console.log("finalRes to remove cart", result.data);
                revalidatePath('/cart')
                return typeof result.numOfCartItems === 'number' ? result.numOfCartItems : 0;
            }
        }
        catch(error){
            console.log('error', error);
        }
    }
    return 0;
}
export async function updateProductCart(id:string, newCount:number){

    const userToken = await decodeUserToken()
    if(userToken){

        try{
            const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${id}`,{
                method:"put",
                headers:{token: userToken,"content-type": "application/json" },
                body:JSON.stringify({count:newCount})

            })
            if(res.ok){

                const result = await res.json()
                console.log("finalRes to update cart"  ,result.data);
                revalidatePath('/cart')
                
                return typeof result.numOfCartItems === 'number' ? result.numOfCartItems : 0;
            }
        }
        catch(error){
            console.log('error', error);
        }
    }
    return 0;
}

export async function removeAllProductFromCart(){

    const userToken = await decodeUserToken()
    if(userToken){

        try{
            const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`,{
                method:"delete",
                headers:{token: userToken},
            })
            const result = await res.json()
            console.log("finalRes to remove all cart"  ,result);
            if(result.status){

                revalidatePath('/cart')
                return result
            }
        }
        catch(error){
            console.log('error', error);
        }
    }
    return 0;
}

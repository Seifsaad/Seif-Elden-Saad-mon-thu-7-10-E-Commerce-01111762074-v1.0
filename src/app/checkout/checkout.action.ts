'use server'
import { getCart } from "_/Api/route.services";
import { decodeUserToken } from "_/app/utils"
import { CheckoutFormObject } from "./checkout.types"
import { CartResponse } from "_/Api/types.services";
import { revalidatePath } from 'next/cache';



export async function createCashOrder(bodyObj?: CheckoutFormObject) {
    const userCart = await getCart();
    console.log("from cart", userCart);

    const { _id: cartId } = userCart as CartResponse;

    const userToken = await decodeUserToken()
    if (userToken) {

        try {
            const res = await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}`, {
                method: "post",
                headers: { token: userToken, "content-type": "application/json" },
                body: JSON.stringify(bodyObj)
            })
            if (res.ok) {

                const result = await res.json()
                console.log("finalRes to update cart", result);
                revalidatePath('/checkout')
                revalidatePath('/cart')

                return result
            }
            else {
                return null
            }
        }
        catch (error) {
            console.log('error', error);
        }
    }
    else {
        return new Error("session end try load again")
    }
}


export async function createCheckoutPayment(bodyObj: CheckoutFormObject) {
    const userCart = await getCart();
    console.log("from cart", userCart);

    const { _id: cartId } = userCart as CartResponse;

    const userToken = await decodeUserToken()
    if (userToken) {

        try {
            const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`, {
                method: "post",
                headers: { token: userToken, "content-type": "application/json" },
                body: JSON.stringify(bodyObj)

            })
            if (res.ok) {

                const result = await res.json()
                console.log("finalRes to update cart", result.data);
                // revalidatePath('/cart')

                return result
            }
            else {
                return null
            }
        }
        catch (error) {
            console.log('error', error);
        }
    }
    else {
        return new Error("session end try load again")
    }
}

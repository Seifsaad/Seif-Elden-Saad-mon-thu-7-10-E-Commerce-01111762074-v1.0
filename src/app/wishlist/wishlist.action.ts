'use server'
import { revalidatePath } from "next/cache";
import { decodeUserToken } from "_/app/utils";

export interface WishlistActionResponse {
    status: string;
    message?: string;
    data: string[];
}
export async function addProductToWishlist(id: string) {
    const bodyObj = { productId: id }
    const userToken = await decodeUserToken()
    if (userToken) {
        try {
            const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                method: "post",
                headers: { token: userToken, "content-type": "application/json" },
                body: JSON.stringify(bodyObj)
            })
            const result = await res.json() as WishlistActionResponse;
            console.log("finalRes to add to wishlist", result);
            revalidatePath('/wishlist')
            return result
        }
        catch (error) {
            console.error('error adding to wishlist', error);
        }
    }
    return { status: "error", message: "Session expired, please try again", data: [] }
}

export async function removeProductFromWishlist(id: string) {
    const userToken = await decodeUserToken()
    if (userToken) {

        try {
            const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
                method: "delete",
                headers: { token: userToken },
            })
            if (res.ok) {
                const result = await res.json() as WishlistActionResponse;
                console.log("finalRes to remove from wishlist", result.data);
                revalidatePath('/wishlist')
                return result
            }
        }
        catch (error) {
            console.error('error removing from wishlist', error);
        }
    }
    return { status: "error", message: "Session expired", data: [] }
}

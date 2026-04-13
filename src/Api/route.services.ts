import { decodeUserToken } from "_/app/utils";
import { CartResponse, Category, Product, WishlistResponse } from "./types.services";

export async function getAllProducts(): Promise<Product[] | undefined> {

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
    const result = await res.json()

    return result.data

  }

  catch (error) {
    console.error('Error in getAllProducts:', error);
  }

}
export async function getAllCategories(): Promise<Category[] | undefined> {

  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`);
    const result = await res.json()

    return result.data

  }

  catch (error) {
    console.error('Error in getAllCategories:', error);
  }

}

export async function getSpecificProduct(id: string): Promise<Product | undefined> {


  try {

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    const result = await res.json()
    return result.data
  }

  catch (error) {
    console.error(`Error in getSpecificProduct (${id}):`, error);
  }
}
export async function getCart(): Promise<CartResponse | undefined> {

  const userToken = await decodeUserToken()
  if (userToken) {

    try {

      const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
        headers: { token: userToken }
      })
      const result = await res.json()
      return result.data
    }
    catch (error) {
      console.error('Error in getCart:', error);
    }
  }
  else {
    return undefined
  }
}

export async function getMyOrders() {

  const userToken: any = await decodeUserToken()
  // console.log('userToken from getMyOrders', userToken);
  const userId = userToken?.userRouteId

  // console.log('userId from getMyOrders', userId);


  if (userToken) {
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
      const data = await res.json()
      // console.log('data from getMyOrders', data);
      return data;
    } catch (error) {
      console.log('error from getMyOrders', error);
    }
  }
  return null;
}
export async function getWishlist(): Promise<WishlistResponse | undefined> {

  const userToken = await decodeUserToken()
  if (userToken) {

    try {

      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        headers: { token: userToken }
      })
      const result = await res.json()
      // console.log('result from getWishlist', result);
      return result
    }
    catch (error) {
      console.error('Error in getWishlist:', error);
    }
  }
  else {
    return undefined
  }
}

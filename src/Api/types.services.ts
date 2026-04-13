export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: Brand;
  category: Category;
  images: string[];
  priceAfterDiscount:number;
  ratingsAverage:number;
  ratingsQuantity:number;
  imageCover:string;
  quantity:number;
}

export interface Category {
  _id: string;
  name: string;
  image: string;
}
export interface Brand {
  _id: string;
  name: string;
  image: string;
}

export interface CartResponse {
  _id:string;
  cartOwner:string;
  products: Item[];
  totalCartPrice:number;
}


export interface Item {
  count: number;
  product: Product;
  _id: string;
  price: number;
}

export interface WishlistResponse {
count:number;
data:Product[];
}
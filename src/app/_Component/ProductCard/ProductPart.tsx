import React from 'react'
import {  getAllProducts } from '_/Api/route.services';
import ProductCard from './ProductCard';
import Link from 'next/link';


export default async function ProductPart() {


    const allProducts = await getAllProducts()
    // console.log("part products" ,allProducts);
    
  return (
    <div className='grid md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-10 w-full py-15 '>
        {allProducts?.map(product=> <Link href={`/products/productDetails/${product.id}`} key={product.id} >  <ProductCard  product={product} />
        </Link> )}
    </div>
  )
}

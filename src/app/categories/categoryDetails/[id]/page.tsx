import ProductPart from '_/app/_Component/ProductCard/ProductPart'
import React from 'react'
import { getProductsByCategory } from '../../categories.action'
import { Product } from '_/Api/types.services';
import ProductCard from '_/app/_Component/ProductCard/ProductCard';
import { getAllProducts } from '_/Api/route.services';

export default async function categoryDetails({params}:{params:{id:string}}) {

  const data = await getProductsByCategory(params.id)
  console.log("data from category details", data);
  


  return (
    <>
    
    </>
  )
}

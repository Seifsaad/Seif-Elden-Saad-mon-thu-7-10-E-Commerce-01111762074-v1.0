import { getAllProducts } from '_/Api/route.services';
import React from 'react'
import ProductPart from '../_Component/ProductCard/ProductPart';
import { FaBoxOpen } from 'react-icons/fa6';
import Link from 'next/link';

export default function products() {
  // const {data} = await getAllProducts();

  return (
    <div>
      <div className='bg-linear-to-r  from-green-600 to-green-400 py-15 px-6 '>
          <div className='flex items-center text-xl gap-2 py-5'>
            <Link href="/" className='text-gray-300 hover:text-white transition-colors cursor-pointer'>Home /</Link>
            <span className='text-white font-bold'> Products</span>
          </div>
          <div className='flex text-white items-center gap-2'>
            <div className='w-15 h-15 rounded-lg p-2 flex justify-center items-center text-4xl text-white bg-linear-to-l from-green-500 to-green-600'>
              <FaBoxOpen/>  
            </div>
            <div >
          <h1 className='text-3xl font-bold'>All Products</h1>
          <p className='text-lg'>Explore our compleate product collection</p>
            </div>

          </div>
        </div>
      <ProductPart />
    </div>
  )
}

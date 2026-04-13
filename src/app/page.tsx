import { getAllProducts , getAllCategories } from '_/Api/route.services';
import React, { lazy, Suspense } from 'react'
import MySwiper from './_Component/MySwiper/MySwiper';
import image1 from '@images/banner-4.jpeg'
import image2 from '@images/blog-img-1.jpeg'
import image3 from '@images/blog-img-2.jpeg'
import FeaturesCard from './_Component/FeaturesCard/FeaturesCard';
import { FaArrowRight } from "react-icons/fa6";
import CategoryPart from './_Component/CategoryCard/CategoryPart';
import ProductPart from './_Component/ProductCard/ProductPart';
import { ClipLoader } from 'react-spinners';
import Link from 'next/link';

const CategoryLazyPart = lazy(()=> import('./_Component/CategoryCard/CategoryPart'))



export default async function Home() {

  return (
    <div>
      <MySwiper imageList={[
        
       {image: image1.src,
        h3:'fresh Products Delivered to your Door',
        p:'Get 20 % off on your first order',
        button1:'Shop Now',
        button2:'View Offers',
       },
       {image: image2.src,
        h3:'primum Quality Guaranteed',
        p:'fresh from farm to your table',
        button1:'Shop Now',
        button2:'Learn More',

       },
       {image: image3.src,
        h3:'Fast & Free Delivery',
        p:'Same day delivery available',
        button1:'Order Now',
        button2:'Delivery Info',
       },
        
        
        ]} />
      <FeaturesCard />
      <div className='container mx-auto sm:px-4 md:px-0 py-5 md:flex justify-between'>
        <div className='flex items-center gap-2 '>
          <div className='h-5 w-1 rounded-2xl bg-linear-to-t bg-[#007A55] bg-[#00BC7D]'>
          </div>
          <h1 className='text-2xl font-bold'>Shop By <span className='text-[#007A55] text-2xl font-bold'>Category</span></h1>
        </div>
        <Link href="/categories" className='flex items-center gap-2 cursor-pointer text-green-600 hover:text-[#007A55]'>
          <p>View All Categories</p>
          <FaArrowRight />
        </Link>
      </div>
      <Suspense fallback={<div><ClipLoader /></div>}>
        <CategoryLazyPart />
      </Suspense>
      {/* <CategoryPart /> */}
        <div className='flex items-center gap-2 container mx-auto py-5 '>
          <div className='h-5 w-1 rounded-2xl bg-linear-to-t bg-[#007A55] bg-[#00BC7D]'>
          </div>
          <h1 className='text-2xl font-bold'>Featured  <span className='text-[#007A55] text-2xl font-bold'>Products</span></h1>
        </div>
      <ProductPart />
    </div>
  )
}

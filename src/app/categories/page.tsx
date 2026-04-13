import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Suspense, lazy } from 'react'
import { ClipLoader } from 'react-spinners'

const CategoryLazyPart = lazy(()=> import('../_Component/CategoryCard/CategoryPart'))

export default function categories() {
  return (
    <div>
            <div className='container mx-auto sm:px-4 md:px-0 py-5 md:flex justify-between'>
        <div className='flex items-center gap-2 '>
          <div className='h-5 w-1 rounded-2xl bg-linear-to-t bg-[#007A55] bg-[#00BC7D]'>
          </div>
          <h1 className='text-2xl font-bold'>Shop By <span className='text-[#007A55] text-2xl font-bold'>Category</span></h1>
        </div>
      </div>
      <Suspense fallback={<div><ClipLoader /></div>}>
        <CategoryLazyPart />
      </Suspense>
    </div>
  )
}

import { FaBoxOpen } from 'react-icons/fa6';
import Link from 'next/link';
import { getAllProducts } from '_/Api/route.services';


export default async function SearchPage({params}: {params: {search: string}}) {
  console.log("search page", params.search);
  const allProducts = await getAllProducts();
  console.log("allProducts", allProducts);
  // const filteredProducts = allProducts?.filter((product) => product.title.toLowerCase() === params.search.toLowerCase());
  // console.log("filteredProducts", filteredProducts);
  return (
    <div>
      <div className='bg-linear-to-r  from-green-600 to-green-400 py-15 px-6 '>
        <div className='flex items-center text-xl gap-2 py-5'>
          <Link href="/" className='text-gray-300 hover:text-white transition-colors cursor-pointer'>Home /</Link>
          <span className='text-white font-bold'> Products</span>
        </div>
        <div className='flex text-white items-center gap-2'>
          <div className='w-15 h-15 rounded-lg p-2 flex justify-center items-center text-4xl text-white bg-linear-to-l from-green-500 to-green-600'>
            <FaBoxOpen />
          </div>
          <div >
            <h1 className='text-3xl font-bold'>All Products</h1>
            <p className='text-lg'>Explore our compleate product collection</p>
          </div>

        </div>
      </div>
      <div className='grid md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-10 w-full py-15 '>
        {/* {filteredProducts?.map(product=> <Link href={`/products/productDetails/${product.id}`} key={product.id} >  <ProductCard  product={product} />
        </Link> )} */}
    </div>
      {/* <ProductPart /> */}
    </div>
  )
}

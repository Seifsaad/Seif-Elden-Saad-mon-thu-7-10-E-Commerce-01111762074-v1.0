import { getSpecificProduct } from "_/Api/route.services";
import ProductCarosul from "_/app/_Component/MySwiper/ProductCarosul";
import { FaStar } from "react-icons/fa6";
import QuantityButton from "_/app/_Component/Button/QuantityButton";
import AddToCartButton from "_/app/_Component/Button/AddToCartButton";
import { BsLightningChargeFill } from "react-icons/bs";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getSpecificProduct(id);

  console.log("data from product details", data);

  return (
    <div className="p-6 flex flex-col md:flex-row gap-8">
      <div className="shadow-md rounded-lg w-100 p-3">
        <ProductCarosul imageList={data?.images} />
      </div>
      <div className="p-4 flex flex-col gap-4 w-full rounded-lg shadow-md ">
        <div className=" flex gap-4">
          <h5 className=" bg-green-100 text-green-500 px-3 py-1 rounded-full">
            {data?.category.name}
          </h5>
          <h5 className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
            {data?.brand.name}
          </h5>
        </div>
        <h1 className="text-3xl font-semibold">{data?.title}</h1>
        <div className="flex gap-3">
          {Array.from({ length: Math.floor(data?.ratingsAverage || 0) }).map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
          <p className="text-gray-500">{data?.ratingsAverage}</p>
          <p>({data?.ratingsQuantity} reviews)</p>
        </div>
        <h1> {data?.price} EGP</h1>
        {(data?.quantity ?? 0) > 0 ? (
          <p className="text-green-500">In Stock</p>
        ) : (
          <p className="text-red-500">Out of Stock</p>
        )}
        <hr />
        <p>{data?.description}</p>
        <p>Quantity</p>
        <div className="flex items-center gap-2">
          <QuantityButton data={data} />
          <p className="text-gray-500">{data?.quantity} available</p>
        </div>
        <div className="flex justify-between p-2 rounded-md bg-gray-50">
          <p>Total Price :</p>
          <h1 className="font-semibold text-green-500">{data?.price} EGP</h1>
        </div>
        <div className="flex gap-2">
          <AddToCartButton classNames="w-1/2 text-center rounded-lg py-5 font-semibold bg-green-500 hover:bg-green-700 transition-all" id={data?.id || ""} >
            <span >Add to cart</span>
          </AddToCartButton>
          <div className="bg-[#101828] w-1/2 flex gap-2 justify-center items-center  text-white rounded-lg  hover:bg-gray-800 font-semibold">
            <BsLightningChargeFill />
            <span>Buy Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

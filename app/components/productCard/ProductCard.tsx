import Link from 'next/link'
import {CldImage} from 'next-cloudinary'
import AddToCartButton from '../addToCartButton/AddToCartButton'


export default function ProductCard({data}: {data: TProductDetails}) {

  return (
    <div className="p-4 snap-start">
      <div className="w-52 md:w-64">
        <Link key={data.id} href={`/product/${data.id}`}>
        <div className="h-52 w-52 grid place-content-center p-5 bg-gray-900 rounded-lg object-contain md:h-64 md:w-64">
          <CldImage 
           deliveryType='fetch'
           src={data.image} 
           alt={data.name} 
           width="150"  
           height="150"
           loading='lazy' 
          />
        </div>
        <div className="mt-2">
          <h3 className="font-bold text-lg">{data.name}</h3>
        </div>
        <p className="mt-1 text-sm leading-5 line-clamp-4 text-blue-100">{data.description}</p>
        </Link>
        <div className="flex items-center mt-2">
          <p className="text-xl font-bold grow">{parseFloat(data.price).toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
          <AddToCartButton data={data} />
        </div>
      </div>
    </div>
  )
}
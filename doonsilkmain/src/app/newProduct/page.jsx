"use client";
import React,{useEffect,useState} from 'react';
// import LikeButton from "./LikeButton";
// import Prices from "./Prices";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import LikeButton from '@/components/LikeButton';
import Prices from '@/components/Prices';
import BagIcon from '@/components/BagIcon';
import ModalQuickView from '@/components/ModalQuickView';
import ProductStatus from '@/components/ProductStatus';
import { StarIcon } from "@heroicons/react/24/solid";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
// import BagIcon from "./BagIcon";
import toast from "react-hot-toast";
import { Transition } from "@/app/headlessui";
// import ModalQuickView from "./ModalQuickView";
// import ProductStatus from "./ProductStatus";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NcImage from "@/shared/NcImage/NcImage";
import axios from 'axios';
import { baseUrl } from '@/Url';



function RenderVariants({data}){
  
  const [variantActive, setVariantActive] = useState(0);

    return (
      <div className="flex space-x-1">
       
        {data.map((variant, index) => (
          <div
            key={index}
            onClick={() => setVariantActive(index)}
            className={`relative w-11 h-6 rounded-full overflow-hidden z-10 border cursor-pointer ${
              variantActive === index
                ? "border-black dark:border-slate-300"
                : "border-transparent"
            }`}
            title={variant.color}
          >
            <div
              className="absolute inset-0.5 rounded-full overflow-hidden z-0 bg-cover"
              style={{
                backgroundImage: 'pink',
              }}
            ></div>
          </div>
        ))}
      </div>
    );
  }

  function RenderGroupButtons({setShowModalQuickView, data,item}){

    
   
    
    const handleCart=()=>{
        
      console.log(item)

      axios.post(`${baseUrl}/addToCart`, {product_id:item.product_id, quantity:1}, {headers:{
        Authorization : `Bearer ${window.localStorage.getItem('token')}`
      }}).then((response)=>{console.log(response)})
      .catch((error)=>{console.log(error)})
    }

    return (
      <div className="absolute bottom-0 group-hover:bottom-4 inset-x-1 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <ButtonPrimary
          className="shadow-lg"
          fontSize="text-xs"
          sizeClass="py-2 px-4"
          onClick={handleCart}
        >
          <BagIcon className="w-3.5 h-3.5 mb-0.5" />
          <span className="ml-1">Add to bag</span>
        </ButtonPrimary>
        <ButtonSecondary
          className="ml-1.5 bg-white hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg"
          fontSize="text-xs"
          sizeClass="py-2 px-4"
          onClick={() => setShowModalQuickView(false)}
        >
          <ArrowsPointingOutIcon className="w-3.5 h-3.5" />
          <span className="ml-1">Quick view</span>
        </ButtonSecondary>
      </div>
    );
  };


function NewProduct({item}) {
  const [data, setData]=useState('')
  const[price, setPrice]=useState('')
useEffect(()=>{
  axios.get(`${baseUrl}/getMainProductById/${item.product_id}`)
  .then((response)=>{
    //console.log('varient', response)
setPrice(response.data.actualPrice)
setData(response.data.new_varient_s)
})
  .catch((error)=>{console.log(error)})
  //console.log('item',item)
},[])
const status= "Sold Out";
const isLiked= true;

  const [showModalQuickView, setShowModalQuickView] = useState(false);

  
  return (
    <div>
         <>
   <div
        className={`nc-ProductCard relative flex flex-col bg-transparent`}
      >
        <Link href={`/product-detail?id=${item.product_id}`} className="absolute inset-0"></Link>

        <div className="relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 rounded-3xl overflow-hidden z-1 group">
          <Link href={`/product-detail?id=${item.product_id}`} className="block">
            <NcImage
              containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0"
              src={`${baseUrl}/public/image/${item.image1}`}
              className="object-cover w-full h-full drop-shadow-xl"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 40vw"
              alt="product"
            />
          </Link>
      <ProductStatus status={status} />
          <LikeButton liked={isLiked} className="absolute top-3 right-3 z-10" />
        <RenderGroupButtons setShowModalQuickView={setShowModalQuickView} item={item}/>
        </div>

        <div className="space-y-4 px-2.5 pt-5 pb-2.5">
{data&& <RenderVariants data={data} image={item.image1} name={item.name} price={price}/>}
       
          <div>
            <h2 className="nc-ProductCard__title text-base font-semibold transition-colors">
              {item.name}
            </h2>
            <p className={`text-sm text-slate-500 dark:text-slate-400 mt-1 `}>
              {item.description}
            </p>
          </div>

          <div className="flex justify-between items-end ">
            <Prices price={price} />
            <div className="flex items-center mb-0.5">
              <StarIcon className="w-5 h-5 pb-[1px] text-amber-400" />
              <span className="text-sm ml-1 text-slate-500 dark:text-slate-400">
                { "4.5"} ( 2457 reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* QUICKVIEW */}
      <ModalQuickView
        show={showModalQuickView}
        onCloseModalQuickView={() => setShowModalQuickView(false)}
      /> 
 </>
</div>
  )
}

export default NewProduct
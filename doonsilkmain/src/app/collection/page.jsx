"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/shared/Pagination/Pagination";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import SectionSliderCollections from "@/components/SectionSliderLargeProduct";

import axios from "axios";
import { usePathname, useSearchParams, useParams } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";
import NewProduct from "../NewProduct/page";
import { baseUrl } from "@/Url";
const Page = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const Params = useParams()
const[data, setData]= useState('');
const [pData, setPData]= useState()
useEffect(()=>{
const id= searchParams.get('id')

axios.get(`${baseUrl}/get_category/${id}`).then(
  (response)=>{
  setData(response.data.data)}
).catch((error)=>{console.log(error)})

axios.get(`${baseUrl}/getProductsByCategoryId/${id}`)
.then((response)=>{console.log('products',response)
if(response.status===200){
  setPData(response.data.data)}
  toast.success('products updated')
}
)
.catch((error)=>{console.log(error)})
console.log('p-data', pData)
  },

  [pathname, searchParams])
  return (
    <div className={`nc-PageCollection`}>
      <ToastContainer/>
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}
          <div className="max-w-screen-sm">
            <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
             {data==null?'':data.category_name}
            </h2>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
            {data==null?'':data.description}
            </span>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />
          <main>
            {/* TABS FILTER */}
            {/* <TabFilters /> */}

            {/* LOOP ITEMS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
              {/* {PRODUCTS.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))} */}
               { pData===null && pData===''?"" :pData?.map((item, index) => (
               <NewProduct item={item}/>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
              {/* <Pagination /> */}
              <ButtonPrimary loading>Show me more</ButtonPrimary>
            </div>
          </main>
        </div>

        {/* === SECTION 5 === */}
        <hr className="border-slate-200 dark:border-slate-700" />

        <SectionSliderCollections />
        <hr className="border-slate-200 dark:border-slate-700" />

        {/* SUBCRIBES */}
        {/* <SectionPromo1 /> */}
      </div>
    </div>
  );
  
};


export default Page;

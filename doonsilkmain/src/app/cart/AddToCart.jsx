"use client";
import { NoSymbolIcon, CheckIcon } from "@heroicons/react/24/outline";
import NcInputNumber from "@/components/NcInputNumber";
import Prices from "@/components/Prices";
import { Product, PRODUCTS } from "@/data/data";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/Url";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function AddToCart({info, index,setReload, reload,QantitySelected}){

    // useEffect(()=>{
    //   console.log('inuseefect')
    //   axios.post(`${baseUrl}/updateCartItem`,
    //    {CartItems_id:info.main_products_.CartItems_id,quantity:quantitySelected },
    //   {headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
    //   .then((response)=>{console.log(response)})
    //   .catch((error)=>{console.log(error)})
    // },[quantitySelected])

const handleClick=()=>{
    console.log(info.CartItems_id )
    axios.post(`${baseUrl}/deleteCartItem`, 
    {'CartItems_id':info.CartItems_id },
    {headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}}
    ) .then((response)=>{
       // console.log(response)
       if(response.status===200){
        toast.success('Item Deleted successfully!!')
        window.location.reload();
       }
       // setReload(!reload)
    })
     .catch((error)=>{console.log(error)})
}
    return(
          <div
            key={index}
            className="relative flex py-8 sm:py-10 xl:py-12 first:pt-0 last:pb-0"
          >
          <ToastContainer/>
            <div className="relative h-36 w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
              <Image
                fill
                src={`${baseUrl}/${info.main_products_.image1}`}
                alt={info.main_products_.name}
                sizes="300px"
                className="h-full w-full object-contain object-center"
              />
              <Link href="/product-detail" className="absolute inset-0"></Link>
            </div>
    
            <div className="ml-3 sm:ml-6 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between ">
                  <div className="flex-[1.5] ">
                    <h3 className="text-base font-semibold">
                      <Link href="/product-detail">{info.main_products_.name}</Link>
                    </h3>
                    <div className="mt-1.5 sm:mt-2.5 flex text-sm text-slate-600 dark:text-slate-300">
                      <div className="flex items-center space-x-1.5">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M7.01 18.0001L3 13.9901C1.66 12.6501 1.66 11.32 3 9.98004L9.68 3.30005L17.03 10.6501C17.4 11.0201 17.4 11.6201 17.03 11.9901L11.01 18.0101C9.69 19.3301 8.35 19.3301 7.01 18.0001Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.35 1.94995L9.69 3.28992"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.07 11.92L17.19 11.26"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 22H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
    
                        <span>{info.main_products_.color}</span>
                      </div>
                      <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                      <div className="flex items-center space-x-1.5">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M21 9V3H15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 15V21H9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 3L13.5 10.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.5 13.5L3 21"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
    
                        
                      </div>
                    </div>
    
                    <div className="mt-3 flex justify-between w-full sm:hidden relative">
                      <select
                        name="qty"
                        id="qty"
                        className="form-select text-sm rounded-md py-1 border-slate-200 dark:border-slate-700 relative z-10 dark:bg-slate-800 "
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                      <Prices
                        contentClass="py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full"
                        price={info.main_products_.price}
                      />
                    </div>
                  </div>
    
                  <div className="hidden sm:block text-center relative">
                    <div className="border bg-slate-200 p-3 border-r-4">{info.quantity}</div>
                    {/* <NcInputNumber className="relative z-10"  defaultValue={info.quantity}
                onChange={setQualitySelected} /> */}
                  </div>
    
                  <div className="hidden flex-1 sm:flex justify-end">
                    <Prices price={info.main_products_.price} className="mt-0.5" />
                  </div>
                </div>
              </div>
    
              <div className="flex mt-auto pt-4 items-end justify-between text-sm">
                {/* {Math.random() > 0.6
                  ? renderStatusSoldout()
                  : renderStatusInstock()} */}
    
                <button
                onClick={handleClick}
                  href="##"
                  className="relative z-10 flex items-center mt-3 font-medium text-primary-6000 hover:text-primary-500 text-sm "
                >
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
       
    
    )
  }
  

"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/shared/Footer/Footer";
import SiteHeader from "@/app/SiteHeader";
import CommonClient from "./CommonClient";
import AppContext from '../context/withAuth';
import { useEffect, useState } from "react";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
  params,
}) {
  const[token , setToken]=useState('')
  const[id , setId]=useState('')

  useEffect(()=>{
    const value = window.localStorage.getItem('token')
   // console.log(value)
    if(value!==null|| value==''){
      setToken(value)
    }
    console.log('token-auth', token)  
  },[token])
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <AppContext.Provider value={{token, setToken, id ,setId}}>
      <SiteHeader />
        {children}
        <CommonClient />
        <Footer />
      </AppContext.Provider>
       
      </body>
    </html>
  );
}

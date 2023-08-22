"use client"
import React, { useState,FC, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import 'react-phone-number-input/style.css'
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from "../../Url";
import { useContext } from "react";
import AppContext from '../../context/withAuth';

const PageLogin = () => {
  const value = useContext(AppContext);
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
      password: Yup.string()
      .required("password is a required field")
      
  });
  const router = useRouter();
 useEffect(()=>{
  const token = window.localStorage.getItem('token')
  console.log('inside login')
  if(token!==''||token!==null){
    router.push('/')
  }
  if(token===null || token===''){
    router.push('/login')
  }
 },[])
  return (
    <Formik
    validationSchema={schema}
    initialValues={{ email: "" ,password:''}}
    onSubmit={(values) => {
     
    
     axios.post(`${baseUrl}/loginUser`,{email:values.email,password:values.password})
     .then((response)=>{
      if(response.status===200){
       toast.success(response.data.message)
       window.localStorage.setItem('token',response.data.token)
       value.setToken(response.data.token)
       console.log(window.localStorage.getItem('token'))
       router.push('/about')
      }else{
       toast.error(response.data.message)
      }
      console.log(response)})
     .catch((error,response)=>{
      toast.error('User Not Found')
      console.log(error)
    })
    
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
    }) => (
    <div className={`nc-PageLogin`} data-nc-id="PageLogin">
<ToastContainer/>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          {/* <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <Image
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                  sizes="40px"
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div> */}
          {/* OR */}
          <div className="relative text-center">
            {/* <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span> */}
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 "></div>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6"  method="POST">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
               Email
              </span>
             
              <Input value={values.email} onChange={handleChange} name="email" className="mt-1" hidden={true}/>
            {errors.email && touched.email?<span className="text-red-600 sm">{errors.email}</span>:''}

            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link href="/forgot-pass" className="text-sm text-green-600">
                  Forgot password?
                </Link>
              </span>
            <Input value={values.password} onChange={handleChange} name="password" type="password"/>
              
              {errors.password && touched.password?<span className="text-red-600 sm">{errors.password}</span>:''}
            </label>
            <ButtonPrimary type="submit" onClick={handleSubmit}>Continue</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link className="text-green-600" to='/signup' href="/signup">
              Create an account
            </Link>

          </span>
        </div>
      </div>
    </div>
     )}
     </Formik>
  );
};

export default PageLogin;

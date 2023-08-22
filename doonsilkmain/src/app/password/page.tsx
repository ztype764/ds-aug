"use client"
import React, { useState,FC } from "react";
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
import {baseUrl} from '../../Url.jsx';
const Password  =() => {
const [error,setError]=useState(false)
  const schema = Yup.object().shape({
  
      password: Yup.string()
      .required("password is a required field")
      
  });
  const router = useRouter();
var userId :string|null
  if (typeof window !== 'undefined'){
     userId = window.localStorage.getItem('id')
  }
 
 
  return (
    <Formik
    validationSchema={schema}
    initialValues={{ confirm: "" ,password:''}}
    onSubmit={(values) => {
     if(values.password!==values.confirm){
      setError(true)
     }else{
      console.log(values);
     axios.post(`${baseUrl}/savePassword`,{user_id:userId ,password:values.password})
     .then((response)=>{
      if(response.status===200){
      toast.success('user created Successfully')
      router.push('/login')
      }else{
       toast.error(response.data.message)
      }
      console.log(response)})
     .catch((error)=>{
      toast.error('Error sending email or creating user.')
      console.log(error)
    })
     }
     
    
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
      Set Password
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
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
               
              </span>
            <Input value={values.password} onChange={handleChange} name="password" type="password"/>
              
              {errors.password && touched.password?<span className="text-red-600 sm">{errors.password}</span>:''}
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
               Confirm Password
              </span>
             
              <Input value={values.confirm} onChange={handleChange} name="confirm" className="mt-1" hidden={true}/>
            {error?<span className="text-red-600 sm">Confirm password should be same as Password</span>:''}

            </label>
            <ButtonPrimary type="submit" onClick={handleSubmit}>Continue</ButtonPrimary>
          </form>

          {/* ==== */}
          
        </div>
      </div>
    </div>
     )}
     </Formik>
  );
};

export default Password;

"use client"
import React, { FC,useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import 'react-phone-number-input/style.css'
import Link from "next/link";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Input from "@/shared/Input/Input";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { baseUrl } from "../../Url";

function Page(){
  const router = useRouter();
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
  });

  return (
    <Formik
    validationSchema={schema}
    initialValues={{ email: "" }}
    onSubmit={(values) => {
     
      console.log(values);
      axios.post(`${baseUrl}/signupUsers`,{email:values.email})
      .then((response)=>{
       if(response.status===201){
    window.localStorage.setItem('id',response.data.id)
        console.log(localStorage.getItem('id'))
         router.push('/otp');
       }else{
        toast.error(response.data.message)
       }
       console.log(response)})
      .catch((error,response)=>{
       toast.error('Error sending email or creating user.')
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
    <div className={`nc-PageSignUp `} data-nc-id="PageSignUp">
      <ToastContainer/>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
            {/* {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className=" flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <Image
                  sizes="40px"
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))} */}
          </div>
          {/* OR */}
          <div className="relative text-center">
            {/* <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span> */}
             <span className="block text-center text-neutral-700 dark:text-neutral-300">
          Please enter your Email, We will send you a 6 digit OTP for verification.
          </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 "></div>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
               Email
              </span>
             <Input value={values.email} onChange={handleChange} name="email"/>
             {errors.email && touched.email?<span className="text-red-600 sm">{errors.email}</span>:''}
            </label>
            <div id="recaptcha-container"></div>
            <label className="block">
              {/* <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <Input type="password" className="mt-1" /> */}
            </label>
            <ButtonPrimary type="submit" onClick={handleSubmit}>Continue</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            
            <Link className="text-green-600" href="/otp">
              Sign in
            </Link>
          </span>
          
        </div>
      </div>
    </div>
      )}
      </Formik>
  );
};

export default Page;

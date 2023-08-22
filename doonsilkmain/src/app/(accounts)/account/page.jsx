"use client"
import Label from "@/components/Label/Label";
import React, { FC, useContext, useEffect, useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Input from "@/shared/Input/Input";
import Select from "@/shared/Select/Select";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from "@/Url";
import AppContext from "@/context/withAuth";
const AccountPage = () => {
  const value =useContext(AppContext)
  const [name, setName]= useState('')
  const [pin, setPin]= useState('')
  const [address,setAddress] =useState('')
  const [gender , setGender] =useState('')
  const [phone, setPhone] =useState('')
  const [data, setData]=useState({})

  useEffect(()=>{
   
    axios.get(`${baseUrl}/getUserDetails`, {headers:{Authorization: `Bearer ${value.token}`}})
    .then((response)=>{setData(response.data.user) 
      ,setName(response.data.user.name)
      ,setAddress(response.data.user.address)
      ,setGender(response.data.user.gender)
      ,setPin(response.data.user.pincode)
      ,setPhone(response.data.user.phone)
      , console.log(response.data.user)}).catch((error)=>{console.log(error)})
    console.log('data',data)
    
  },[])
  const handleSubmit =()=>{
    console.log('name', name)
    console.log('pin', pin)
    console.log('address', address)
    console.log('gender', gender)
    console.log('phone', phone)
   
      axios.post(`${baseUrl}/addUserDetails`,
      {name:name,phone:phone, address:address,pincode:pin,gender:gender},
      {headers:{Authorization: `Bearer ${value.token}`}})
      .then((response)=>{if(response.status==200){toast.success('Updated Successfully')}}).catch((error)=>{toast.error('There was some issue in updating')})
  }
 
  return (
    <div className={`nc-AccountPage `}>
      <ToastContainer/>
      <div className="space-y-10 sm:space-y-12">
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">
          Account infomation
        </h2>
        <div className="flex flex-col md:flex-row">
         
          <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
            <div>
              <Label>Full name</Label>
              <Input className="mt-1.5" value={name} onChange={(e)=>{setName(e.target.value)}}
               placeholder={name}/>
            </div>

            {/* ---- */}

            {/* ---- */}
            <div>
              <Label>Email</Label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  <i className="text-2xl las la-envelope"></i>
                </span>
                <Input
                  className="!rounded-l-none"
                 defaultValue={data!==null &&data.email}

                 disabled
                />
              </div>
            </div>

            {/* ---- */}
            <div className="max-w-lg">
              <Label>Pin Code</Label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  <i className="text-2xl las la-calendar"></i>
                </span>
                <Input
                  className="!rounded-l-none"
                  placeholder={pin}
                  value={pin} onChange={(e)=>{setPin(e.target.value)}}
                />
              </div>
            </div>
            {/* ---- */}
            <div>
              <Label>Address</Label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  <i className="text-2xl las la-map-signs"></i>
                </span>
                <Input
                  className="!rounded-l-none"
                 placeholder={address}
                  value={address} onChange={(e)=>{setAddress(e.target.value)}}
                />
              </div>
            </div>

            {/* ---- */}
            <div>
              <Label>Gender</Label>
              <Select className="mt-1.5" onChange={(e)=>{setGender(e.target.value)}} value={gender} placeholder={gender} defaultValue={gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
            </div>

            {/* ---- */}
            <div>
              <Label>Phone number</Label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  <i className="text-2xl las la-phone-volume"></i>
                </span>
                <Input className="!rounded-l-none"
              placeholder={phone}
                onChange={(e)=>{setPhone(e.target.value)}} value={phone}
                />
              </div>
            </div>
            {/* ---- */}
            <ButtonPrimary type="submit" onClick={handleSubmit}>Update</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

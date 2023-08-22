"use client"
import Label from "@/components/Label/Label";
import React, { useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Input from "@/shared/Input/Input";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "@/Url";
const AccountPass = () => {
  const [pass, setPass] =useState('')
  const [newPass, setNewPass]=useState('')
  const[ confirm,setConfirm]=useState('')
const handleClick=()=>{
  console.log(pass,newPass,confirm)
  const id =localStorage.getItem('id')
  if(newPass===''||pass===''||confirm===''){
    toast.error('Fill all the details')}
    if(newPass!==''&&pass!==''&&confirm!=='')  {

        axios.post(`${baseUrl}/updatePassword`,{
          user_id:id,
          oldPassword:pass,
          newPassword:newPass
      }).then((response)=>{
        console.log(response.status)
if(response.status===200){toast.success('password updated successfully')}

else{toast.error('please check old password')}

      }).catch((error)=>{toast.error('please check the current password')})

    }

}
    return (
    <div className="space-y-10 sm:space-y-12">
      <ToastContainer/>
      {/* HEADING */}
      <h2 className="text-2xl sm:text-3xl font-semibold">
        Update your password
      </h2>
      <div className=" max-w-xl space-y-6">
        <div>
          <Label>Current password</Label>
          <Input type="password" className="mt-1.5" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
        </div>
        <div>
          <Label>New password</Label>
          <Input type="password" className="mt-1.5" value={newPass} onChange={(e)=>{setNewPass(e.target.value)}}/>
        </div>
        <div>
          <Label>Confirm password</Label>
          <Input type="password" className="mt-1.5" value={confirm} onChange={(e)=>{setConfirm(e.target.value)}}/>
        </div>
        <div className="pt-2">
          <ButtonPrimary onClick={handleClick}>Update password</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default AccountPass;

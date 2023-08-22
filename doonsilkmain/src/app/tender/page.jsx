"use client"
import React, { useEffect, useState } from 'react'
import Heading from "@/components/Heading/Heading";
import DownloadTender from './DownloadTender';
import TextTender from './TextTender'
import TenderLink from './TenderLink'
import './tender.css'
import axios from 'axios';
import { baseUrl } from '@/Url';
export default function page() {
  const[data, setData]=useState('');

  useEffect(()=>{
    axios.get(`${baseUrl}/getAnnouncementFormById`)
    .then((response)=>{
      console.log('All Tender',response.data)
      setData(response.data.data)
    }).catch((error)=>{console.log(error)})
  
  },[]) 

  return (
    <div className='container mb-24 lg:mb-32'>
        <div className='px-6 pt-10 pb-5'>
        <Heading
        desc=" We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content"
      >
        🚀 Updates
      </Heading>
        </div>
      
        <div className='row'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 text-center'>
                <div className='py-4 px-2' style={{backgroundColor:'#e5e7eb6e'}}>
                <h4 class="text-2xl font-semibold leading-none p-3 text-neutral-900 md:text-3xl dark:text-neutral-200">Tender </h4>
               
                  {data==null || data==''?'' :
                  data.map((info)=>{
                    return(
                      <>
                      {
 info.criteria==3 && info.datatype===1 && info.is_active===true ? <DownloadTender url={info.file}/>:''}
 {info.criteria==3 && info.datatype===2 && info.is_active===true ? <TenderLink link={info.text}/>:''}
 {info.criteria==3 && info.datatype===3 && info.is_active===true ? <TextTender txt={info.text}/>:''}
                    </>
                    )
                 
                  
                  })}
               
              
                </div>
                <div className='p-5' style={{backgroundColor:'#e5e7eb6e'}}>
                <h4 class="text-2xl font-semibold leading-none p-3 text-neutral-900 md:text-3xl dark:text-neutral-200">Notices</h4>
               
                {data==null || data==''?'' :
                  data.map((info)=>{
                    return(
                      <>
                      {
 info.criteria==2 && info.datatype===1 && info.is_active===true ? <DownloadTender url={info.file}/>:''}
 {info.criteria==2 && info.datatype===2 && info.is_active===true ? <TenderLink link={info.text}/>:''}
 {info.criteria==2 && info.datatype===3 && info.is_active===true ? <TextTender txt={info.text}/>:''}
                    </>
                    )
                 
                  
                  })}
               
                </div>
                <div className='p-6' style={{backgroundColor:'#e5e7eb6e'}}>
                <h4 class="text-2xl font-semibold leading-none p-3 text-neutral-900 md:text-3xl dark:text-neutral-200">Announcement</h4>
               
                {data==null || data==''?'' :
                  data.map((info)=>{
                    return(
                      <>
                      {
 info.criteria==1 && info.datatype===1 && info.is_active===true ? <DownloadTender url={info.file}/>:''}
 {info.criteria==1 && info.datatype===2 && info.is_active===true ? <TenderLink link={info.text}/>:''}
 {info.criteria==1 && info.datatype===3 && info.is_active===true ? <TextTender txt={info.text}/>:''}
                    </>
                    )
                 
                  
                  })}
                </div>
                

            </div>
        </div>
    </div>
  )
}

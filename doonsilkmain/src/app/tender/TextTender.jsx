import React from 'react'

export default function TextTender({txt}) {
  return (
    <div className='py-2'>
    <div style={{backgroundColor:'white', borderRadius:'10px'}} className='p-1 mx-1 text-neutral-800 '>
   <div className='px-2 downloadbtn'>{txt}</div>
   </div>
   </div>
  )
}

"use client"
import React from 'react'
import './HeaderTitle.css'
import Image from 'next/image'
function HeaderTitle() {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-4 headerTitle py-4'>
           
                <div className='heading md:col-span-2' >  उत्तराखंड को-ऑपरेटिव रेशम फेडरेशन लिo</div>
        
            <div className=' '>
              <Image src="https://ucrf.org.in/wp-content/uploads/2022/06/dhami.jpg" class="image-box" alt="" loading="lazy" width="150" height="128" /> 
            <div className='italic font-semibold text-center'>
                Pushkar Singh Dhami
                <div>
                Hon. Chief Minister Uttarakhand 
                    </div>
           
            </div>
            </div>



            <div className='image-box '>
 <Image src="https://ucrf.org.in/wp-content/uploads/2022/06/Dhan-singh.jpg" 
class="image-box" alt="" loading="lazy" width="128" height="80"/> 

<div className='italic font-semibold text-center'>
Dr. Dhan Singh Rawat 
            <div>
           Hon. Cabinet Minister,
            </div>
            <div>
           Co-operatives & Higher Education
            </div>
           
            </div>
            </div>

        </div>

    </div>
  )
}

export default HeaderTitle
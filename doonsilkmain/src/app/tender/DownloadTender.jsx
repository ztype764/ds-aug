import { baseImgUrl } from '@/Url';
import React from 'react'

function DownloadTender({url}) {
  const handleDownload = () => {
    const pdfUrl= `${baseImgUrl}${url}`
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'downloaded-pdf.pdf'; // Set desired file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
    const download =<svg class="h-6 w-6 text-green-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
</svg>
  return (
    <div className='py-2'>
    <div style={{backgroundColor:'white', borderRadius:'10px'}} className='p-1 mx-1 text-neutral-800 '>
    <button className='btn bg-slate-50 downloadbtn px-2' onClick={()=>{handleDownload()}}> <span className="text-blue-600">
{url}
</span>
{download}</button>
</div></div>

  )
}

export default DownloadTender
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { baseUrl } from '../url'
import { Card, CardBody, CardHeader, Container } from 'reactstrap'
import { H5 ,Btn} from '../AbstractElements'
import { Edit2, Trash } from 'react-feather';

import { imgUrl } from '../url';
import { ToastContainer, toast } from 'react-toastify';

export default function DisplayProducts() {
  const [data, setData]=useState('')
 const[reload, setReload]=useState('')
 const handleDelete=(row)=>{
console.log(row)
axios.post(`${baseUrl}/deleteMainProduct`, { product_id:row.product_id})
.then((response)=>{console.log(response)})
.catch((error)=>{console.log(error)})
setReload(!reload)
 }
  useEffect(()=>{
    axios.get(`${baseUrl}getAllProducts`)
    .then((response)=>{console.log(response)
      if(response.status==200){
        toast.success('Products Fetched')
        setData(response.data.data)
      }
    })
    .catch((err)=>{
      toast.error('Server is low')
      console.log(err)})
  },[reload])
 const tableColumns = ((handleDelete)=>[
   
    {
        name: 'ID',
        selector: Row => Row['product_id'],
        sortable: true,
        center: true,
    },
    {
        name: 'Name',
        selector: Row => Row['name'],
        sortable: true,
        center: true,
        wrap:true
   
    },
   

    {
        name: 'description',
        selector: Row => Row['description'],
        sortable: true,
        center: true,
        wrap:true,
       
    },
    {
        name: 'Created',
        selector: Row => Row['createdAt'],
        sortable: true,
        center: true,
        wrap:true,
       
    },
    {
        name: 'category_id',
        selector: Row => Row['category_id'],
        sortable: true,
        center: true,
        wrap:true,
       
    },
    {
        name:'color',
   selector:Row => Row['color'],
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        wrap:true
      },
      {
        name:'price',
   selector:Row => Row['price'],
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        wrap:true
      },
      {
        name:'discount_percentage',
   selector:Row => Row['discount_percentage'],
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        wrap:true
      },
      {
        name:'image1',
        cell:(row)=><a href={imgUrl+row.image1}>Image1</a>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        wrap:true
      },
      {
        name:'image2',
  
   cell:(row)=><a href={imgUrl+row.image2}>Image2</a>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        wrap:true
      },
      {
        name:'image3',
        cell:(row)=><a href={imgUrl+row.image3}>Image3</a>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        wrap:true
      },     
      
      {
        name:'Delete',
        cell:(row) => <Btn color="danger" onClick={()=>{handleDelete(row)}} id={row.ID}><Trash size={14} color="white"/></Btn>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
]);
  return (
    <div className="page-body pt-4">
      <ToastContainer/>
      <Container>
        <Card>
          <CardHeader>
            <H5>Product Table</H5>
          </CardHeader>
          <CardBody>
          <DataTable
                  data={data}
                  columns={tableColumns( handleDelete )}
                  striped={true}
                  persistTableHead
                subHeaderWrap={true}
                responsive
              
                />
          </CardBody>
        </Card>
      </Container>
    </div>
  )
}

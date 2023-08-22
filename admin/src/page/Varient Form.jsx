import React,{useState,useEffect} from 'react'
import Breadcrumbs from "../CommonElements/Breadcrumbs";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row,CardFooter, CardHeader, Button,Container } from "reactstrap";
import DataTable from 'react-data-table-component';
import { H5, H6,H4 } from '../AbstractElements';
import axios from "axios";
import { toast,ToastContainer } from 'react-toastify';
import { baseUrl } from '../url';
export default function VarientForm () {
    const[name, setName]=useState('');
    const[hex, setHex]=useState('');
    const[imageOne, setImageOne]=useState('')
    const[imageTwo, setImageTwo]=useState('')
    const[imageThree, setImageThree]=useState('')
    const[productId, setProductId]=useState('')
    const[data, setData]=useState([])

    useEffect(()=>{
        axios.get(`${baseUrl}getAllProducts`)
        .then((response)=>{console.log(response)
        setData(response.data.data)})
        .catch((error)=>{console.log(error)})
    },[])
    const handleClick=()=>{
        const formData = new FormData();
        formData.append('product_id',productId)
        formData.append('color', name)
        formData.append("color_hex",hex);
        formData.append('image1',imageOne)
        formData.append('image2',imageTwo)
        formData.append('image3',imageThree)
        if(productId===''){
            toast.error('please select the product')
        }else{
            if(name===''||imageOne===''||imageTwo===''||imageThree===''){
                toast.error('please fill all category ')
            }else{
                console.log(formData)
                axios.post(`${baseUrl}addVariant`,formData ,{
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  }).then((response)=>{console.log(response);
                    if(response.status===201){
                      toast.success('Varient added successfully')
                     window.location.reload();
                    }else{
                      toast.error('There was some error')
                    }
                    
                    })
                  .catch((error)=>{console.log(error) ,toast.error('Please recheck your connection')})
            }
        }
      
        
    }

  return (

         <div className="page-body">
    <Breadcrumbs parent="User Data" />
    <Card>
        <ToastContainer/>
        <CardHeader>
            <H4>ADD PRODUCT VARIENT FORM</H4>
        </CardHeader>
        <CardBody>
        <H5>Add Varient</H5>
        <Row className="mt-3">
            
            <Col>
            <Label>Product</Label>
            <div className="mb-3">
      <select className="form-select" required aria-label="select example" onChange={(e)=>setProductId(e.target.value)} >
        {data.map((info)=>{
          return(
            <option value={info.product_id}>{info.name}</option>
          )
        })}
      
      
      </select>
     
    </div>
          </Col>
            <Col>
            <Label>Color Name</Label>
            <Input type="text" placeholder="Color Name" value={name} onChange={(e)=>{setName(e.target.value)}}/> 
          
          </Col>
          <Col>
          <Label>Color Hex</Label>
            <Input type="color" placeholder="orange.." value={hex} onChange={(e)=>{setHex(e.target.value)}}/>   
          </Col>
        </Row>
        <Row className="mt-3">
            <Col>
            <Label>Front Image</Label>
            <Input type="file" aria-label="file example" placeholder='main-image' accept="image/png, image/jpeg"  onChange={(e)=>{setImageOne(e.target.files[0])}}/>
            </Col>
            <Col>
            <Label>Mid Image</Label>
            <Input type="file" aria-label="file example" placeholder='main-image' accept="image/png, image/jpeg" onChange={(e)=>{setImageTwo(e.target.files[0])}}/>
            </Col>
            <Col>
            <Label>last Image</Label>
            <Input type="file" aria-label="file example" placeholder='main-image' accept="image/png, image/jpeg"  onChange={(e)=>{setImageThree(e.target.files[0])}}/>
            </Col>
        </Row>
      </CardBody>

      <CardFooter>
        <Row>
            
            <Col>
            <Button color="primary" type="submit" className="me-2" onClick={handleClick}>
      ADD
        </Button>
       
            </Col>
          
        </Row>
      
      </CardFooter>
    </Card>
   </div>
        
      


  )
}

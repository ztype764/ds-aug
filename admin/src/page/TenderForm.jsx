import React ,{  useState,useEffect } from 'react';
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row,CardFooter, CardHeader, Button,Container } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import { H4,H6 } from '../AbstractElements';
import axios from 'axios';
import { baseUrl } from '../url';
import TenderTable from './TenderTable';
export default function TenderForm() {
    const[tenderValue, setTenderValue]=useState('1');
    const[text,setText]=useState('');
    const[status,setStatus]=useState('1');
    const[category,setCategory]=useState('1');
    const[file,setFile]=useState('')
    const handleClick=()=>{
       const formData= new FormData();
       formData.append('criteria',category)
       formData.append('datatype',tenderValue)
       formData.append('is_active',status)
    formData.append('file',file)
    
        formData.append('text',text)
     
if(file===''&& text===''){
    toast.error('Please enter Field')
}else{
    axios.post(`${baseUrl}addTenderForm`,formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        }})
        .then((response)=>{
            console.log(response) 
            if(response.status===201){
                toast.success('Field Added Successfully')
                window.location.reload()
                
            }else{
                toast.error('There was some Error')
            }
        }).catch((error)=>{console.log(error)
        toast.error('there was some error')})

}
    }
  return (
    <div className="page-body pt-4">
        <ToastContainer/> 
        <Card>
            <CardHeader>
                <H4>
                Tender Form
                </H4>  
            </CardHeader>
            <CardBody>
                <Form>
                    <FormGroup>
                        <Row>
                        <Col>
                            <Label className="mb-2"></Label>
                    <select className="form-select" required aria-label="select example" onChange={(e)=>setCategory(e.target.value)} >
                    <option>select</option> 
                    <option value={1}>Announcement</option>
                    <option value={2}>Notices</option> 
                    <option value={3}>Tender</option> 
                    </select>
                            </Col>
                           
                            <Col>
                            <Label className="mb-2"></Label>
                    <select className="form-select" required aria-label="select example" onChange={(e)=>setTenderValue(e.target.value)} >
                    <option>select</option> 
                    <option value={1}>Downloads</option>
                    <option value={2}>Link</option> 
                     <option value={3}>Text</option>
                    </select>
                            </Col>
                            <Col>
                            <Label className="mb-2"></Label>
                    <select className="form-select" required aria-label="select example" onChange={(e)=>setStatus(e.target.value)} >
                    <option>select</option> 
                    <option value={1}>Active</option>
                    <option value={0}>Disable</option> 
                    </select>
                            </Col>
                        </Row>
                  
                    </FormGroup>
                    {tenderValue==='1' &&
                    <FormGroup>
                    <Label className="mb-2">Upload Pdf</Label>
                    <Input type="file"  rows="3" accept=".pdf" onChange={(e)=>{setFile(e.target.files[0])}} required/>
                    </FormGroup>
                    }
                     {tenderValue==='2' &&
                    <FormGroup>
                    <Label className="mb-2">URL/TEXT</Label>
                    <Input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" value={text} onChange={(e)=>{setText(e.target.value)}} required/>
                    </FormGroup>
                    }
                    
                    {
                       tenderValue==='3'&&
                       <FormGroup>
                       <Label className="mb-2">Add Text</Label>
                       <Input  type="textarea"  rows="3"  value={text} onChange={(e)=>{setText(e.target.value)}} required/>
                       </FormGroup>
                    }
                    

                </Form>
            </CardBody>
            <CardFooter>
            <Button color="primary"  className="me-2" onClick={handleClick}>
        Post
        </Button>
            </CardFooter>
        </Card>
       <TenderTable/>
       
    </div>
  )
}

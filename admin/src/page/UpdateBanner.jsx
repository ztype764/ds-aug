
import Breadcrumbs from "../CommonElements/Breadcrumbs";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row,CardFooter, CardHeader, Button,Container } from "reactstrap";
import { H4, H5, H6 } from '../AbstractElements';
import React ,{  useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import { Btn } from '../AbstractElements';
import { Trash2,Edit2, AlignCenter} from "react-feather";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {baseUrl,imgUrl} from "../url"
import './index.css'

export default function UpdateBanner() {
    const[banner, setbanner]= useState('')
    const[display,setDisplay]=useState('')
    const[bannerTwo , setBannerTwo]=useState('')
    const[displayTwo , setDisplayTwo]=useState('')
    const[bannerThree , setBannerThree]=useState('')
    const[displayThree, setDisplayThree]=useState('')
    useEffect(()=>{
        axios.get(`${baseUrl}getBanner`).then((response)=>{
          console.log(response.data.data[0])
          setbanner(response.data.data[0].image1)
          setBannerThree(response.data.data[0].image3)
          setBannerTwo(response.data.data[0].image2)
        
      })

        .catch((error)=>{console.log(error)})
    },[])
    const handleClick=()=>{
        const formData =new FormData();
      formData.append('image1', banner)
      formData.append('image2',bannerTwo)
      formData.append('image3',bannerThree)
      
        axios.post(`${baseUrl}addBanner`,formData,{
            headers: {
              "Content-Type": "multipart/form-data",
            },
          } ).then((response)=>{console.log(response)
            if(response.status===201){
                toast.success('Banner Updated')
            }else{
                toast.error('There was some error')
            }
        }).catch((error)=>{toast.error('There was some error')})
    }
    function handleChange(e) {
        console.log(e.target.files);
        setDisplay(URL.createObjectURL(e.target.files[0]));
        setbanner(e.target.files[0])
    }
    function handleChangeTwo(e){
      console.log(e.target.files);
      setDisplayTwo(URL.createObjectURL(e.target.files[0]));
      setBannerTwo(e.target.files[0])
    }
    function handleChangeThree(e){
      console.log(e.target.files);
      setDisplayThree(URL.createObjectURL(e.target.files[0]));
      setBannerThree(e.target.files[0])
    }
  const handleCancel=()=>{

    }
  return (
    <div className="page-body pt-4" >
         <Breadcrumbs parent="Update Banner" />
         <ToastContainer/>
         <Container>
            <Card>
            <CardBody>
                <CardHeader>
                    <H4>Banner</H4>
                </CardHeader>
                <CardBody>
                <Row>
                    <Col>
                    <img 
                    src={display}
                    //src={`${imgUrl}${banner}`} 
                    alt='image' className="bannerImage"/>
                    </Col>
                </Row>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Col>
                    <Input type="file" accept="image/png, image/jpeg" onChange={handleChange}/>
                    </Col>
                    <Col>
                    <Button color="primary" type="submit" className="me-2" onClick={handleClick}>
                      Update
                    </Button>
                    <Button color="danger" type="submit" className="me-2" onClick={handleCancel}>
                     Cancel
                    </Button>
                    </Col>
                  </Row>
                </CardFooter>
            </CardBody>
            
            </Card>
            <Card>
            <CardBody>
                <CardHeader>
                    <H4>Banner</H4>
                </CardHeader>
                <CardBody>
                <Row>
                    <Col>
                    <img 
                    src={displayTwo} 
                    alt='image' height={500} width={1000}/>
                    </Col>
                </Row>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Col>
                    <Input type="file" accept="image/png, image/jpeg" onChange={handleChangeTwo}/>
                    </Col>
                    <Col>
                    <Button color="primary" type="submit" className="me-2" onClick={handleClick}>
                      Update
                    </Button>
                    <Button color="danger" type="submit" className="me-2" onClick={handleCancel}>
                     Cancel
                    </Button>
                    </Col>
                  </Row>
                </CardFooter>
            </CardBody>
            
            </Card>
            <Card>
            <CardBody>
                <CardHeader>
                    <H4>Banner</H4>
                </CardHeader>
                <CardBody>
                <Row>
                    <Col>
                    <img src={displayThree} alt='image' height={500} width={1000}/>
                    </Col>
                </Row>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Col>
                    <Input type="file" accept="image/png, image/jpeg" onChange={handleChangeThree}/>
                    </Col>
                    <Col>
                    <Button color="primary" type="submit" className="me-2" onClick={handleClick}>
                      Update
                    </Button>
                    <Button color="danger" type="submit" className="me-2" onClick={handleCancel}>
                     Cancel
                    </Button>
                    </Col>
                  </Row>
                </CardFooter>
            </CardBody>
            
            </Card>
         </Container>
    </div>
  )
}

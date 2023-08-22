import React,{useState,useEffect} from 'react'
import Breadcrumbs from "../CommonElements/Breadcrumbs";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row,CardFooter, CardHeader, Button,Container } from "reactstrap";
import DataTable from 'react-data-table-component';
import { H5, H6 } from '../AbstractElements';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import axios from "axios";
import { baseUrl } from '../url';
export const tableColumns = (()=>[   
    {
        name: 'ID',
        selector: Row => Row['user_id'],
        sortable: true,
        center: true,
    },
    {
        name: 'Email',
        selector: Row => Row['email'],
        sortable: true,
        center: true,
        wrap:true
    },
    {
        name: 'Created At',
        selector: Row => Row['createdAt'],
        sortable: true,
        center: true,
        wrap:true,
    },

    {
        name: 'Updated At',
        selector: Row => Row['updatedAt'],
        sortable: true,
        center: true,
        wrap:true,
       
    },
   
]);

function UserTable(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`${baseUrl}getAllUsers`)
        .then((response)=>{
          console.log('all user',response.data)
          setData(response.data.data)
        }).catch((error)=>{console.log(error)})
      
      },[]) 
    return(
        <Container fluid={true} className="data-tables">
        <Row>
          <Col sm="12">
            <Card>
            <CardHeader>
             <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <H5>All User</H5>
              
             </div>
             </CardHeader> 
              <CardBody>
                <DataTable
                  data={data}
                  columns={tableColumns()}
                  striped={true}
                  persistTableHead
                subHeaderWrap={true}
                />
              </CardBody>
            </Card>
          </Col>

        </Row>
      </Container>
    )
}
export default function UserData() {
  return (
    <div className="page-body">
    <Breadcrumbs parent="User Data" />
  
         
        
        <UserTable/>

   </div>
  )
}

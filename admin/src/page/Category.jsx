
import Breadcrumbs from "../CommonElements/Breadcrumbs";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row,CardFooter, CardHeader, Button,Container } from "reactstrap";
import { H5, H6 } from '../AbstractElements';
import React ,{  useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import { Btn } from '../AbstractElements';
import { Trash2,Edit2} from "react-feather";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {baseUrl} from '../url'



export const tableColumns = ((handleDelete,handleUpdate)=>[
   
    {
        name: 'ID',
        selector: Row => Row['category_id'],
        sortable: true,
        center: true,
    },
    {
        name: 'Name',
        selector: Row => Row['category_name'],
        sortable: true,
        center: true,
        wrap:true
    },
    {
        name: 'No. Of Products',
        selector: Row => Row['productCount'],
        sortable: true,
        center: true,
        wrap:true,
    },

    {
        name: 'Details',
        selector: Row => Row['description'],
        sortable: true,
        center: true,
        wrap:true,
       
    },
    {
        name:'Action',
   
        cell:(row) => <Btn color="danger" onClick={()=>{handleDelete(row)}} id={row.ID}><Trash2 size={14}/></Btn>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
      {
        name:'Update',
        cell:(row) => <Btn color="info" onClick={()=>{handleUpdate(row)}} id={row.ID}><Edit2 size={14} color="white"/></Btn>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
]);
function CategoryForm({replay,setReplay}){
  

    const  [name, setName] = useState('');
    const [description , setDescription]= useState('')
    const handleSubmit=(e)=>{
      console.log(name,description)
      e.preventDefault();
      axios.post(`${baseUrl}add-categories`,
      {category_name:name,description:description}).then((response)=>{
        if(response.status===201){
          toast.success('Category Created')
       setReplay(!replay)
       setName('') ;setDescription('')
        }else{
          toast.error(response.data.message)
          setReplay(!replay)
        }
      })
      .catch((error)=>{console.log(error)} )
    }
   
    return(
        <Form className="form theme-form" >
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label className="mb-2">Category Name</Label>
              <Input type="text" placeholder="" value={name} onChange={(e)=>{setName(e.target.value
                )}}/>
            </FormGroup>
          </Col>
        </Row>
       
        <Row>
          <Col>
            <Label>Category Description</Label>
            <Input type="textarea"  rows="3"  value={description} onChange={(e)=>{setDescription(e.target.value
                )}}/>
          </Col>
        </Row>
      </CardBody>

      <CardFooter>
        <Button color="primary" type="submit" className="me-2" onClick={handleSubmit}>
         Submit
        </Button>
       
      </CardFooter>
    </Form>
    )
}
function UpdateModal(props ){
 
  const update = ( )=>{
console.log('update',props.updateName,props.updateDescription, props.updateId)
    axios.post(`${baseUrl}update-categories`,{ category_name:props.updateName,description:props.updateDescription,
    category_id:props.selectedRows.category_id}).then(
      (response)=>{if(response.status){
toast.success('updated successfully')
props.setOpen(false)
      }else{
        toast.error('something went wrong')
      }
    })
      .catch((error)=>{console.log(error)})
 
  }
  return(
    <Modal
    isOpen={props.isOpen}
    toggle={props.toggler}
    size={props.size}
    centered={props.centered ? true : false}
  >
    <ModalHeader>Update</ModalHeader>
    <ModalBody >
    <FormGroup>
              <Label className="mb-2">Category Name</Label>
              <Input type="text" placeholder={props.updateName} value={props.updateName} onChange={(e)=>{props.setUpdateName(e.target.value)}} />
            </FormGroup>
            <Label>Category Description</Label>
            <Input type="textarea"  rows="3"  placeholder={props.updateDescription} value={props.updateDescription} onChange={(e)=>{props.setUpdateDescriprion(e.target.value)}}
            />

    </ModalBody>
    <ModalFooter>
      <Btn color="danger" onClick={()=>{props.setOpen(false)}}>
        Cancel
      </Btn>
     
    
        <Btn color="secondary" onClick={()=>{update()}}>
          SaveChanges
        </Btn>
   
    </ModalFooter>
  </Modal>
  )
}
function CategoryTable({replay}){
    const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
const[reload,setReload]=useState(false);
  const [total , setTotal]=useState(0)
  const [isOpen , setOpen]=useState(false);
  const[updateName, setUpdateName]=useState('');
  const [updateDescription , setUpdateDescriprion]=useState('')
  const[updateId, setUpdateId]=useState('')
  
useEffect(()=>{
  axios.get(`${baseUrl}get_all_categories`)
  .then((response)=>{
    console.log(response.data)
    setTotal(response.data.totalCategories)
    setData(response.data.data)
  }).catch((error)=>{console.log(error)})
},[isOpen,reload,replay])
useEffect(()=>{
  console.log('useEffect is called' , console.log('selected effect' ,selectedRows))
},[selectedRows])
  const handleDelete= (row) => { 
   axios.post(`${baseUrl}delete_category`,{category_id:row.category_id}).then((response)=>{
    if(response.status===200){
     toast.success('category deleted')
   setReload(!reload)
    }else{
      toast.error('some error occured')
      setReload(!reload)
    }
    console.log(response)
   }).catch((error)=>{console.log(error)})
  }
  const handleUpdate= (row) => { 
   
    setOpen(true);
    setSelectedRows(row)
    setUpdateName(row.category_name)
    setUpdateDescriprion(row.description)
    setUpdateId(row.category_id)
 
  }
  
  
    return(
        <Container fluid={true} className="data-tables">
        <Row>
          <Col sm="12">
            <Card>
            <CardHeader>
             <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <H5>All Category</H5>
              <H6>Total : {total}</H6>
             </div>
             </CardHeader> 
              <CardBody>
                <DataTable
                  data={data}
                  columns={tableColumns(handleDelete, handleUpdate)}
                  striped={true}
                  persistTableHead
                subHeaderWrap={true}
                   responsive
                
                
                />
              </CardBody>
            </Card>
          </Col>
          <UpdateModal size={'lg'}
          centered={true} isOpen={isOpen} setOpen={setOpen} 
          selectedRows={selectedRows} updateName={updateName} 
          updateDescription={updateDescription} setUpdateName={setUpdateName}
          setUpdateDescriprion={setUpdateDescriprion} updateId={updateId} setUpdateId={setUpdateId}/>
        </Row>
      </Container>
    )
}
export default function Category() {
  const[replay,setReplay]=useState(false)
  useEffect(()=>{
    console.log('reloaded')
  },[replay])
  return (
    <div className="page-body">
    <Breadcrumbs parent="Create Category" />
    
   
    <Card>
  
    <CardHeader>
        <H5>Create Category Form</H5>
    </CardHeader> 
  
        <CategoryForm replay={replay} setReplay={setReplay}/>
    </Card> 
    
        <CategoryTable replay={replay}/>
    
   
  </div>)
}

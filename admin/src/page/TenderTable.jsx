
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
import { baseUrl } from "../url";


export const tableColumns = ((handleUpdate)=>[
   
    {
        name: 'ID',
        selector: Row => Row['id'],
        sortable: true,
        center: true,
    },
    {
        name: 'Criteria',
        selector: Row => Row['criteria']==1? <>Announcement</>: Row['criteria']==2? <>Notices</>:<>Tender</>,
        sortable: true,
        center: true,
        wrap:true
   
    },
    {
        name: 'DataType',
        selector: Row => Row['datatype']==1? <>Download</>: Row['criteria']==2? <>Link</>:<>Text</>,
        sortable: true,
        center: true,
        wrap:true,
    },

    {
        name: 'File/Url/Text',
        selector: Row => Row['datatype']===1?Row['file']:Row['text'],
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
        name: 'Last Update',
        selector: Row => Row['updatedAt'],
        sortable: true,
        center: true,
        wrap:true,
       
    },
    {
        name:'Status',
   selector:Row => Row['is_active']?<div style={{color:'green'}}>Active</div>:<div style={{color:'red'}}>Inactive</div>,
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


function UpdateModal(props ){
 
    const update = ( )=>{
  console.log('update',props.updateName,)
      axios.post(`${baseUrl}updateAnnouncementForm`,{is_active:props.updateName, id:props.updateId})
      .then(
        (response)=>{
            if(response.status==200){
            toast.success('updated successfully')
            props.setReload(!props.reload)
            props.setOpen(false)

        }else{
          toast.error('something went wrong')
        }
        console.log(response)
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
                <Label className="mb-2">Update Status</Label>
                <select className="form-select" required aria-label="select example" onChange={(e)=>props.setUpdateName(e.target.value)} >
                <option value={0}>Deactivate</option>
                <option value={1}>Activate</option>
                </select>
              
              </FormGroup>
  
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

function TenderTable() {
    const [data, setData] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
  const[reload,setReload]=useState(false);
   
    const [isOpen , setOpen]=useState(false);
    const[updateName, setUpdateName]=useState('0');
  
    const[updateId, setUpdateId]=useState('')
    
    
       const handleUpdate= (row) => { 
        console.log(row)
        setUpdateName('0')
      setOpen(true)
      setUpdateId(row.id)
      setReload(!reload)
      console.log(updateName)
       }
    useEffect(()=>{
        axios.get(`${baseUrl}getAnnouncementFormById`)
        .then((response)=>{
          console.log('All Tender',response.data)
          setData(response.data.data)
        }).catch((error)=>{console.log(error)})
      
      },[reload]) 
  return (
 
 
    <Container fluid={true} className="data-tables">
        <Row>
          <Col sm="12">
            <Card>
            <CardHeader>
             <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <H5>Update Tenders</H5>
              <H6></H6>
             </div>
             </CardHeader> 
              <CardBody>
                <DataTable
                  data={data}
                  columns={tableColumns( handleUpdate)}
                  striped={true}
                  persistTableHead
                subHeaderWrap={true}
                responsive
                />
              </CardBody>
            </Card>
          </Col>

        </Row>
        <UpdateModal size={'lg'}
          centered={true} isOpen={isOpen} setOpen={setOpen} 
          selectedRows={selectedRows} updateName={updateName} 
          reload={reload} setReload={setReload}
         setUpdateName={setUpdateName}
         updateId={updateId} setUpdateId={setUpdateId}/>
      </Container>
   
  )
}

export default TenderTable
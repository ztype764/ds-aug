import Breadcrumbs from "../CommonElements/Breadcrumbs";
import { useForm } from "react-hook-form";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row,CardFooter, CardHeader, Button,Container } from "reactstrap";
import { H5 } from '../AbstractElements';
import React ,{  useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import axios from "axios";
import {baseUrl} from '../url'
import Compressor from 'compressorjs';
function ProductForm(){
 const[productId, setProductId]=useState('');
    const  [name, setName] = useState('');
    const [description , setDescription]= useState('');
    const [category, setCategory]= useState(1);
    const [price, setPrice]=useState('');
    const [discounted , setDiscounted]=useState('');
    const [percent , setPercentage]= useState('');
    const [productColor , setProductColor]=useState('');
    const [productHex, setProductHex]=useState('');
    const [imageOne ,setImageOne]=useState([]);
    const [imageTwo, setImageTwo]=useState([]);
    const [imageThree , setImageThree]=useState([])
 //Varient 1
 const  [vTwoName, setVTwoName] = useState('');
  const [vTwoHex, setVTwoHex]=useState('');
  const[vTwoImageOne, setVTwoImageOne]=useState('');
  const[vTwoImageTwo, setVTwoImageTwo]=useState('');
  const[vTwoImageThee, setVTwoImageThree]=useState('');
    const [colorThree, setColorThree]=useState({name:'',hex:'',imageOne:'',imageTwo:'',imageThree:''})
    const [data, setData]=useState([]);

    
    useEffect(()=>{
      axios.get(`${baseUrl}get_all_categories`)
      .then((response)=>{
        console.log('category',response.data)
        setData(response.data.data)
      }).catch((error)=>{console.log(error)})
    
    },[]) 

    useEffect(()=>{console.log(productId,'productId')},[productId])


  const handleSubmitMain=()=>{
    // new Compressor(imageOne, {
    //   quality: 0.6, 
    //   success: (compressedResult) => {  
    //     console.log(compressedResult)  
    //     setImageOne(compressedResult)
    //    // setCompressedFile(res)
    //   },
    // });
    // new Compressor(imageTwo, {
    //   quality: 0.6, 
    //   success: (compressedResult) => {  
    //     console.log(compressedResult)  
    //     setImageTwo(compressedResult)
    //    // setCompressedFile(res)
    //   },
    // }); new Compressor(imageTwo, {
    //   quality: 0.6, 
    //   success: (compressedResult) => {  
    //     console.log(compressedResult)  
    //     setImageTwo(compressedResult)
    //    // setCompressedFile(res)
    //   },
    // });

if(name===''||description===''||category===''||price===''||percent===''||productColor===''||imageOne===''||imageTwo===''||imageThree===''){
  toast.error('Please fill all categories')
}else{
const formData = new FormData();
formData.append("name", name);
formData.append("description",description);
formData.append("category_id",category);
formData.append("price", price);
formData.append("discount_percentage", percent);
formData.append("color", productColor)
formData.append("color_hex",productHex)
formData.append("image1", imageOne)
formData.append("image2",imageTwo)
formData.append("image3", imageThree)
console.log(formData)
axios.post(`${baseUrl}addProductWithVariants`,formData,{
  headers: {
    "Content-Type": "multipart/form-data",
  },
}
  
  )
.then((response)=>{
  console.log("test",response)
if(response.status===201){
  toast.success('Product Added Successfully')
  setProductId(response.data.data.product_id)
  console.log(response.data.data.product_id)

}else{
  toast.error('There was some error')
}
}
).catch((error)=>{
  console.log("test err",error)
  toast.error('There was some error')
})
}
  }
  
  const handleVarientOne=()=>{
    if(productId===''){
      toast.error(' please create the product first')
    }else{
const formData = new FormData();
formData.append('product_id',productId);
formData.append('color', vTwoName);
formData.append('color_hex',vTwoHex);
formData.append('image1',vTwoImageOne);
formData.append('image2',vTwoImageTwo );
formData.append('image3',vTwoImageThee);

console.log(formData)
axios.post(`${baseUrl}addVariant`,formData,{
  headers: {
    "Content-Type": "multipart/form-data",
  },
}
  ).then((response)=>{
    console.log(response)
  }).catch((error)=>{console.log(error)})
  }}
    return(
        <Form className="form theme-form" >
           <ToastContainer/> 
      <CardBody>
        <Row>
          <Col>
            <FormGroup>
              <Label className="mb-2">Product Name <span style={{color:'red', fontSize:14}}>* make your product name unique</span></Label>
              <Input type="text" placeholder="" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
            </FormGroup>
          </Col>
        </Row>
       
        <Row>
          <Col>
            <Label>Product Description <span style={{color:'red', fontSize:14}}>*</span></Label>
            <Input type="textarea"  rows="3" value={description} onChange={(e)=>{setDescription(e.target.value)}} required/>
          </Col>
        </Row>
        
        <Row className="mt-3">
          <Col>
            <Label>Category <span style={{color:'red', fontSize:14}}>*</span></Label>
            <div className="mb-3">
      <select className="form-select" required aria-label="select example" onChange={(e)=>setCategory(e.target.value)} >
      <option>select</option>     
         {data.map((info)=>{
          return(
            <option value={info.category_id}>{info.category_name}</option>
          )
        })}
      
      
      </select>
     
    </div>
          </Col>
          <Col>
          <Label>Price <span style={{color:'red', fontSize:14}}>*</span></Label>
        <Input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} required/>
          </Col>
          <Col>
          <Label>Discount % <span style={{color:'red', fontSize:14}}>*</span></Label>
        <Input type="text" value={percent} onChange={(e)=>{setPercentage(e.target.value), setDiscounted(price-price*percent/100)}}/>
          </Col>
        
        </Row>

        <Row className="mt-3">
            
          <Col>
            <Input type="text" placeholder="color name" value={productColor} onChange={(e)=>{setProductColor(e.target.value)}} required/> 
            </Col>
            <Col>
            <Input type="color" placeholder="orange.." value={productHex} onChange={(e)=>{setProductHex(e.target.value)}} required/>   
          </Col>
        </Row>
        <Row className="mt-3">
          
            <Col>
            <Label>Front Image <span style={{color:'red', fontSize:14}}>*</span></Label>
            <Input type="file" aria-label="file example" placeholder='main-image' 
            required accept="image/png, image/jpeg"
             onChange={(e)=>{setImageOne(e.target.files[0])}} />
            </Col>
            <Col>
            <Label>Mid Image <span style={{color:'red', fontSize:14}}>*</span></Label>
            <Input type="file" aria-label="file example" placeholder='main-image' 
            required accept="image/png, image/jpeg"
             onChange={(e)=>{setImageTwo(e.target.files[0])}}/>
            </Col>
            <Col>
            <Label>last Image <span style={{color:'red', fontSize:14}}>*</span></Label>
            <Input type="file" aria-label="file example" placeholder='main-image' 
            required accept="image/png, image/jpeg" 
             onChange={(e)=>{setImageThree(e.target.files[0])}}/>
            </Col>
       
        </Row>
        </CardBody>
        
        <CardFooter>
        <Row>
            
            <Col>
            <Button color="primary"  className="me-2" onClick={handleSubmitMain}>
         Submit
        </Button>
       
            </Col>

        </Row>
      
      </CardFooter>
     {productId===''?'':<div>
      <CardBody>
        <Row className="mt-5">
            <H5>Add Varient One</H5>
          <Col>
            <Input type="text" placeholder="Name" value={vTwoName} onChange={(e)=>{setVTwoName(e.target.value)}} /> 
          
          </Col>
          <Col>
            <Input type="color" placeholder="orange.." value={vTwoHex} onChange={(e)=>{setVTwoHex(e.target.value)}} />   
          </Col>
        </Row>
        <Row className="mt-3">
            <Col>
            <Label>Front Image</Label>
            <Input type="file" aria-label="file example" placeholder='main-image' accept="image/png, image/jpeg"   onChange={(e)=>{setVTwoImageOne(e.target.files[0])}}/>
            </Col>
            <Col>
            <Label>Second Image</Label>
            <Input type="file" aria-label="file example" placeholder='main-image' accept="image/png, image/jpeg"  onChange={(e)=>{setVTwoImageTwo(e.target.files[0])}}/>
            </Col>
            <Col>
            <Label>last Image</Label>
            <Input type="file" aria-label="file example" placeholder='main-image' accept="image/png, image/jpeg"   onChange={(e)=>{setVTwoImageThree(e.target.files[0])}}/>
            </Col>
       
        </Row>
        </CardBody>

        <CardFooter>
        <Row>
            
            <Col>
            <Button color="primary"  className="me-2" onClick={handleVarientOne}>
         Submit
        </Button>
        <Button color="light" type="reset">
          Cancel
        </Button>
            </Col>
            
        </Row>
      
      </CardFooter>
      </div>} 
    {productId===''?'':<div>
    <CardBody>
        <Row className="mt-5">
            <H5>Add Varient Two</H5>
            <Col>
            <Input type="text" placeholder="Name" value={colorThree.name} onChange={(e)=>{setColorThree({name:e.target.value})}}/> 
          
          </Col>
          <Col>
            <Input type="color" placeholder="orange.." value={colorThree.hex} onChange={(e)=>{setColorThree({hex:e.target.value})}}/>   
          </Col>
        </Row>
        <Row className="mt-3">
            <Col>
            <Label>Front Image</Label>
            <Input type="file" aria-label="file example" placeholder='main-image' accept="image/png, image/jpeg" value={colorThree.imageOne} onChange={(e)=>{setColorThree({imageOne:e.target.files})}}/>
            </Col>
            <Col>
            <Label>Second Image</Label>
            <Input type="file" aria-label="file example" placeholder='main-image' accept="image/png, image/jpeg" value={colorThree.imageTwo} onChange={(e)=>{setColorThree({imageTwo:e.target.files})}}/>
            </Col>
            <Col>
            <Label>last Image</Label>
            <Input type="file" aria-label="file example" placeholder='main-image' accept="image/png, image/jpeg" value={colorThree.imageThree} onChange={(e)=>{setColorThree({imageThree:e.target.files})}}/>
            </Col>
        </Row>
      </CardBody>

      <CardFooter>
        <Row>
            
            <Col>
            <Button color="primary" type="submit" className="me-2">
         Submit
        </Button>
        <Button color="light" type="reset">
          Cancel
        </Button>
            </Col>
          
        </Row>
      
      </CardFooter>
    </div>}
      
    </Form>
    )
}
export default function Products() {
  return (
    <div className="page-body">
        <ToastContainer/>
    <Breadcrumbs parent="Create Product" />
    <Card>
    <CardHeader>
        <H5>Create Product Form</H5>
    </CardHeader> 
    <ProductForm />
    </Card> 

  </div>
  )
}

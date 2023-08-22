import { useNavigate } from "react-router-dom";
import { Btn, H4, H6 } from "../AbstractElements";
import { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import {toast } from "react-toastify";
import {  Login, LoginDetails, Password,  YourName } from "../Constant";


const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SimpleLoginHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "admin" && password === "DoonSilk@2023") {
      localStorage.setItem("login", JSON.stringify(true));
      toast.success("Login Success...!");
      navigate(`${process.env.PUBLIC_URL}/category`);
     
    } else {
      toast.error("Please Enter valid email or password...!");
    }
  };
  return (
    <div>
      <form onSubmit={SimpleLoginHandle} className="theme-form">
        <H4 className="text-uppercase">{Login}</H4>
        <H6>{LoginDetails}</H6>
        <FormGroup>
          <Label className="pt-0">{YourName}</Label>
          <Input type="text" defaultValue={email} onChange={(event) => setEmail(event.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label>{Password}</Label>
          <Input type="password" defaultValue={password} onChange={(event) => setPassword(event.target.value)}/>
        </FormGroup>
       
        <FormGroup className="row g-2 mt-3 mb-0">
          <Btn color="primary" className="d-block w-100">{Login}</Btn>
        </FormGroup>
      
      </form>
    </div>
  );
};

export default LoginForm;

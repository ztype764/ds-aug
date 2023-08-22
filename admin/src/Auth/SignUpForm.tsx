import { Col, FormGroup, Input, Row } from "reactstrap";
import { Btn, H4, H6 } from "../AbstractElements";
import {AlreadyUser,Href,Login,NewUser,SignUp,UserNameAndPassword,} from "../Constant";
import SocialIcons from "./SocialIcons";
import { toggleLoginForm } from "../Service";

const SignUpForm = () => {
  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()} className="theme-form">
        <H4 className="text-center text-uppercase">{NewUser}</H4>
        <H6 className="text-center">{UserNameAndPassword}</H6>
        <Row className="g-2">
          <Col md="12">
            <FormGroup>
              <Input type="text" placeholder="First Name" />
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Input type="text" placeholder="Last Name" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input type="text" placeholder="User Name" />
        </FormGroup>
        <FormGroup>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <Row className="g-2">
          <Col sm="4">
            <Btn color="primary">{SignUp}</Btn>
          </Col>
          <Col sm="8">
            <div className="text-start mt-2 m-l-20">
              {AlreadyUser}&nbsp;&nbsp;
              <a className="btn-link text-capitalize" href={Href} onClick={toggleLoginForm}>{Login}</a>
            </div>
          </Col>
        </Row>
        <SocialIcons />
      </form>
    </div>
  );
};

export default SignUpForm;

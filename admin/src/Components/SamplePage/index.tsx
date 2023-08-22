import { Col, Container, Row, Card, CardBody } from "reactstrap";
import HeadingCommon from "../../Common/HeadingCommon";
import { SampleCard } from "../../Constant";
import { P } from "../../AbstractElements";

const SamplepageConatiner = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <Card>
            <HeadingCommon
              Heading={SampleCard}
              span={true}
              dangerouslySetInnerHTML="lorem ipsum dolor sit amet, consectetur adipisicing elit"
            />
            <CardBody>
              <P>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </P>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SamplepageConatiner;

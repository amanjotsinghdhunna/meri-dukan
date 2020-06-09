/* eslint-disable no-unreachable */
import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import InfoForm from "./InfoForm";

const Step2 = props => {
  const { setStep, data } = props;
  const [isSeller, setIsSeller] = useState(false);
  return (<div className="mt-3">
    <p>Use app as a</p>
    <Row className="position-relative rounded">
      <Col>
        <Form>
          <Form.Group as={Col} md="6" className="d-flex" controlId="userType">
            <div className="mb-3 mr-5">
              <Form.Check
                type="radio"
                name="seller"
                value="Customer"
                checked={!isSeller}
                onChange={(e) => setIsSeller(e.target.value.toLowerCase() === "provider")}
                id="Customer"
                label="Customer"
              />
              <Form.Check
                type="radio"
                name="seller"
                value="provider"
                checked={isSeller}
                onChange={(e) => setIsSeller(e.target.value.toLowerCase() === "provider")}
                id="Seller"
                label="Provider"
              />
            </div>
          </Form.Group>
        </Form>
      </Col>

    </Row>
    <Row className="justify-content-between">
      <Col className="align-items-center d-flex">
        <InfoForm isSeller={isSeller} setStep={setStep} data={data} />
      </Col>
    </Row>
  </div>
  );
};
export default Step2;

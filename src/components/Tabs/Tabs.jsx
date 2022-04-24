import React, {useEffect, useState} from 'react';
import {Tab, Row, Nav, Col, InputGroup, Button, FormControl} from "react-bootstrap";
import {useParams, useNavigate} from "react-router-dom";

const Tabs = ({data}) => {
  const navigate = useNavigate();
  const params = useParams();
  const [amount, setAmount] = useState(0);
  const [amountSSSS, setAmountSSSS] = useState(0);
  const [key, setKey] = useState('usd');
  const saveAmount = (number) => {
    setAmount(number)
  }

  useEffect(() => {
    saveAmount(amountSSSS)
  }, [key])
  useEffect(() => {
    if (!amountSSSS) {
      setAmount(0)
    }
  }, [amountSSSS])
  return (
    <div>
      <h1>Currency converter</h1>
      <InputGroup
        onKeyPress={event => {
          if (event.key === 'Enter') {
            setAmount(+event.target.value)
          }
        }}
        onChange={(e) => {
          setAmountSSSS(e.target.value)
        }}
        className="mb-3">
        <Button type={'submit'} onClick={() => saveAmount(amountSSSS)} variant="outline-secondary" id="button-addon1">
          Convert
        </Button>
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)} defaultActiveKey="usd" id="left-tabs-example">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link
                  eventKey="usd" title='usd'>UAH-USD</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="eur" title='eur'>UAH-EUR</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="pln" title='pln'>UAH-PLN</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="usd">
                {data?.rates?.USD * amount}
              </Tab.Pane>
              <Tab.Pane eventKey="eur">
                {data?.rates?.EUR * amount}
              </Tab.Pane>
              <Tab.Pane eventKey="pln">
                {data?.rates?.PLN * amount}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

    </div>
  );
};


export default Tabs;

import React from "react";
import Axios from "axios";
import { Container, Col, Input, FormGroup, Button, Row } from "reactstrap";
import "./index.css";

const App = () => {
  const APP_ID = "1c3eb9e7";

  const APP_KEY = "ef5c5d76e61066828519d2fdd711e83a";

  const url = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    console.log(result);
  };

  return (
    <div>
      <Container>
        <Col md={10} mt={5}>
          <h1 onClick={getData} className="text-center app-name">
            Food Searching App
          </h1>
          <form>
            <FormGroup>
              <Row>
                <Col md={8}>
                  <Input
                    className="input-text"
                    placeholder="Search Food Recipe"
                    autoComplete="off"
                  />
                </Col>
                <Col>
                  <Button color="primary" className="input-text">
                    <input type="submit" value="Search" />
                  </Button>
                </Col>
              </Row>
            </FormGroup>
          </form>
        </Col>
      </Container>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Axios from "axios";
import { v4 as uuid } from "uuid";
import { Container, Col, Input, FormGroup, Button, Row } from "reactstrap";
import "./index.css";
import Recipe from "./components/Recipe";
import AlertMe from "./components/Alert";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "1c3eb9e7";

  const APP_KEY = "ef5c5d76e61066828519d2fdd711e83a";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      setRecipes(result.data.hits);
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill the row");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Container>
        <Col md={10} mt={5}>
          <h1 onClick={getData} className="text-center app-name">
            Food Searching App
          </h1>
          <form onSubmit={onSubmit}>
            <FormGroup className="iform">
              <Row>
                <Col md={8}>
                  {alert !== "" && <AlertMe alert={alert} />}
                  <Input
                    className="input-text"
                    placeholder="Enter your food name"
                    autoComplete="off"
                    onChange={onChange}
                    value={query}
                  />
                </Col>
                <Col>
                  <Button color="primary" className="input-button-text">
                    <input type="submit" value="Search" />
                  </Button>
                </Col>
              </Row>
            </FormGroup>
          </form>
          <br />
          <Row>
            <div>
              {recipes !== [] &&
                recipes.map((recipe) => (
                  <Recipe key={uuid()} recipe={recipe} />
                ))}
            </div>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default App;

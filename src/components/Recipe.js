import React, {useState} from "react";
import {
  Card,
  CardLink,
  CardBody,
  Col,
  CardTitle,
  CardImg,
  Button,
  CardText
} from "reactstrap";
import RecipeDetails from "./RecipeDetails"

const Recipe = ({ recipe }) => {

  const [show, setShow] = useState(false)

  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipes">
      <Col md={10}>
        <Card className="mb-5">
          <CardImg src={image} alt={label} />
          <CardBody>
            <CardTitle tag="h2">{label}</CardTitle>
            <CardText>
              {show && <RecipeDetails ingredients={ingredients} />}
            </CardText>
            <CardLink href={url} target="_blank" rel="noopener noreferrer">
              <Button color="primary">Make Meal</Button>
            </CardLink>
            <CardLink>
              <Button color="danger" onClick={() => setShow(!show)}>Ingredients</Button>
            </CardLink>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default Recipe;

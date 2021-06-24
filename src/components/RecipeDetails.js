import React from "react";
import { Alert } from "reactstrap";
import { v4 as uuid } from "uuid";

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <Alert class="py-3">
        <ul style={{ fontFamily: "Poppins", fontWeight: 500 }} key={uuid()}>
          <li>{ingredient.text}</li>
          <li>Weight - {ingredient.weight}</li>
        </ul>
      </Alert>
    );
  });
};

export default RecipeDetails;

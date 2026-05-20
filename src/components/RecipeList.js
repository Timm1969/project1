import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const RecipeList = ({ recipes, setSelectedRecipe, toggle }) => {
  return (
    <>
      <div>
        <h1>Recipe List</h1>
        <ListGroup>
          {recipes.map((item, index) => (
            <ListGroupItem
              key={index}
              onClick={() => {
                setSelectedRecipe(item);
                toggle();
              }}
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </>
  );
};
export default RecipeList;

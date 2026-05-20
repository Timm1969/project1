import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const RecipeForm = ({ addRecipe, Loader }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addRecipe({ title: title, description: description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1>Add Recipe</h1>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            required
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            required
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">{Loader ? "Loading..." : "Submit"}</Button>
      </Form>
    </>
  );
};
export default RecipeForm;

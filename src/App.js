import "./App.css";
import { useEffect, useReducer, useState } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeModal from "./components/RecipeModal";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modal, setModal] = useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  };

  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle = () => setModal(!modal);

  const addRecipe = (newRecipe) => {
    setLoader(true);
    setTimeout(() => {
      setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
      setLoader(false);
    }, 5000);
  };

  useEffect(() => {
    console.log("Recipes updated:", recipes);
  }, [recipes]);

  return (
    <>
      <p>Count:{state.count}</p>
      <Button onClick={() => dispatch({ type: "increment" })}>Increment</Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>Decrement</Button>
      <Button onClick={() => dispatch({ type: "reset" })}>Reset</Button>
      <RecipeForm addRecipe={addRecipe} Loader={loader} />
      <RecipeList
        recipes={recipes}
        setSelectedRecipe={setSelectedRecipe}
        toggle={toggle}
      />
      {selectedRecipe && (
        <RecipeModal
          modal={modal}
          toggle={toggle}
          selectedRecipe={selectedRecipe}
        />
      )}
    </>
  );
}

export default App;

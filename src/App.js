import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeModal from "./components/RecipeModal";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const addRecipe = (newRecipe) => {
    setLoader(true);
    setTimeout(() => {
      setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
      setLoader(false);
    }, 5000);
  };

  return (
    <>
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

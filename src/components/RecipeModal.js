import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const RecipeModal = ({ selectedRecipe, toggle, modal }) => {
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>{selectedRecipe.title}</ModalHeader>
        <ModalBody>{selectedRecipe.description}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default RecipeModal;

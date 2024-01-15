import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

export default function AddFolderButton({ currentFolder }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { currentUser } = useAuth();
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (currentFolder == null) return;
    database.folders.add({
      name: name,
      parentId: currentFolder.id,
      userId: currentUser.uid,
      //path,
      createdAt: database.getCurrentTimestamp(),
    });
    setName("");
    closeModal();
  }

  return (
    <>
      <Button onClick={openModal} variant="dark" size="sm">
        Add Folder
      </Button>
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={closeModal}>
              Close
            </Button>
            <Button variant="dark" type="submit">
              Add Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
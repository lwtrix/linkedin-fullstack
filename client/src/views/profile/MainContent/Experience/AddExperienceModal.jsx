import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const AddExperienceModal = ({
  handleClose,
  show,
  user,
  refreshExperiences
}) => {
  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    description: "",
    area: "",
    startDate: "",
    endDate: ""
  });

  const handleChange = (value, fieldToSet) => {
    setNewExperience({
      ...newExperience,
      [fieldToSet]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newExperience)
    };

    const res = await fetch(
      `http://localhost:3001/experiences/${user?._id}`,
      options
    );
    const data = await res.json();

    refreshExperiences();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              onChange={(e) => handleChange(e.target.value, "role")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              onChange={(e) => handleChange(e.target.value, "company")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              autoFocus
              rows={3}
              required
              onChange={(e) => handleChange(e.target.value, "description")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Location</Form.Label>
            <Form.Control
              required
              onChange={(e) => handleChange(e.target.value, "area")}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              onChange={(e) => handleChange(e.target.value, "startDate")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              required
              onChange={(e) => handleChange(e.target.value, "endDate")}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

// import { useDispatch } from "react-redux";
// import { submitEditProfile } from "../../../../redux/actions";

export const EditProfileModal = ({ handleClose, show, user }) => {
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [title, setTitle] = useState(user.title);
  const [bio, setBio] = useState(user.bio);
  const [area, setArea] = useState(user.area);
  const submitEditProfile = async (e, name, surname, title, bio, area) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let data = JSON.stringify({
      name: name,
      surname: surname,
      bio: bio,
      title: title,
      area: area
    });

    let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: data
    };
    try {
      let response = await fetch(
        `http://localhost:3001/users/${user?._id}`,
        requestOptions
      );
      let result = await response.json();
      console.log("result:", result);
    } catch (error) {
      console.log("error:", error);
    }
  };
  // const dispatch = useDispatch();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) =>
            submitEditProfile(e, name, surname, title, bio, area)
          }
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Proffesional Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              value={bio}
              required
              onChange={(e) => setBio(e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Location / Based In</Form.Label>
            <Form.Control
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              autoFocus
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

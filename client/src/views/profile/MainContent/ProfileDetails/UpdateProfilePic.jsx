import React from "react";
import { Modal, Button, Container } from "react-bootstrap";
import "./ProfileImageModal.css";

export const UpdateProfilePic = ({ showModal, handle_Close, user }) => {
  const handleEditProfilePic = async (event) => {
    var formdata = new FormData();
    formdata.append("profile", event.target.files[0]);

    let requestOptions = {
      method: "POST",
      body: formdata
    };
    let response = await fetch(
      `http://localhost:3001/users/${user?._id}/picture`,
      requestOptions
    );
    let result = await response.json();
    {
      result && handle_Close();
    }
  };
  return (
    <Modal
      show={showModal}
      onHide={handle_Close}
      animation={false}
      size="lg"
      dialogClassName="modal-90w public-profile-modal-class"
      aria-labelledby="example-custom-modal-styling-title"
      centered
    >
      <Modal.Header closeButton>
        <h5 className="fontS16 black">Change photo</h5>
      </Modal.Header>
      <Modal.Body className="align-center">
        <Container className="Dflex">
          <h6>Kajal, help others recognize you!</h6>
          <div className="ProfileImgContainer">
            <img className="profile-img" src={user?.image} alt="#" />
          </div>
          <p className="moMarginPadding">
            On LinkedIn, we require members to use their real identities, so
            take or upload a
          </p>
          <p className="moMarginPadding">
            photo of yourself. Then crop, filter, and adjust it to perfection.
          </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button>Use camera</Button>
        <input type="file" name="file" onChange={handleEditProfilePic} />
      </Modal.Footer>
    </Modal>
  );
};

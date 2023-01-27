import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { BsImage, BsCamera } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import "./ProfileImageModal.css";

const ProfileImageModal = ({ show, handleClose, user }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation={false}
      size="lg"
      dialogClassName="modal-90w public-profile-modal-class"
      aria-labelledby="example-custom-modal-styling-title"
      centered
      className="my-modal"
    >
      <Modal.Header closeButton className="">
        <h5 className="fontS16">Profile photo</h5>
      </Modal.Header>

      <Modal.Body className="align-center">
        <div className="img-container">
          <img className="profile-img" src={user?.image} alt="#" />
        </div>
      </Modal.Body>
      <Row>
        <Col className="footer">
          <div className="center">
            <FiEdit2 className="icon-22" />
            <p className="fontS16">Edit</p>
          </div>

          <div className="center">
            <BsCamera className="icon-22" />
            <p className="fontS16">Add photo</p>
          </div>
          <div className="center">
            <BsImage className="icon-22" />
            <p className="fontS16">Frames</p>
          </div>
        </Col>
        <Col className="deleteView">
          <div className="center marginR20" onClick={handleClose}>
            <RiDeleteBin5Fill className="icon-22" />
            <p className="fontS16">Delete</p>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default ProfileImageModal;

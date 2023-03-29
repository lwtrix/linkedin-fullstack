import React, { useEffect } from "react";
import "./profile-information.css";
import { Col, Row, Modal, Button } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { ProffesionalBanners } from "./ProffesionalBanners";
import { useState } from "react";
import { EditProfileModal } from "./EditProfileModal";
import EditUserProfileImage from "./EditUserProfileImage";
import "./pictureUploader.css";
import ProfileImageModal from "./ProfileImageModal";

export const ProfileInformation = ({ user }) => {
  const [isOtherUser, setIsOtherUser] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditProfilePicture, setShowEditProfilePicture] = useState(false);
  const handleClose = () => setShowEditModal(false);
  const handleShow = () => setShowEditModal(true);

  const [show, setShow] = useState(false);

  const handle_Close = () => setShow(false);
  const handle_Show = () => setShow(true);


  useEffect(() => {
    if (user) {
      setIsOtherUser(false);
    }
  }, [user]);

  return (
    <>
      <div className="profile-information">
        <div className="images">
          <img
            className="bg-img"
            src={
              "https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"
            }
            alt=""
          />
          {showEditProfilePicture === true ? (
            <ProfileImageModal
              show={showEditProfilePicture}
              className="pictureUploader"
            />
          ) : (
            ""
          )}
          <div className="img-container">
            <img
              className="profile-img"
              src={user?.image}
              alt="#"
              onClick={handle_Show}
            />
          </div>
        </div>
        <Row className="text-container">
          <Col className="details" xs={10}>
            <h5 className="full-name">{user?.name + " " + user?.surname}</h5>
            <p className="title">{user?.title}</p>
            {isOtherUser ? <p className="bio">{user?.bio}</p> : null}
            <p className="location">{user?.area}</p>
            <p className="connections">43 connections</p>
            {isOtherUser === false ? (
              <div className="controls">
                <a href="#" className="open-to">
                  Open to
                </a>
                <a href="#" className="add-section">
                  Add profile section
                </a>
                <a href="#" className="more">
                  More
                </a>
              </div>
            ) : null}
          </Col>
          <Col xs={2} className="education">
            {isOtherUser === false ? (
              <div className="edit-btn">
                <FiEdit2 className="icon-12" onClick={handleShow} />
              </div>
            ) : null}
          </Col>
        </Row>
        {isOtherUser === false ? <ProffesionalBanners /> : null}
        <ProfileImageModal
          show={show}
          user={user}
          handleClose={handle_Close}
        />
        <EditProfileModal
          user={user}
          show={showEditModal}
          handleClose={handleClose}
        />
      </div>
    </>
  );
};

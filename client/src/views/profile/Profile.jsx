import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ProfileDetails } from "./MainContent/ProfileDetails";
import { ProfileSideBar } from "./RightSideBar/ProfileSideBar";
import "./profile.css";
const Profile = ({ otherProfile }) => {
  return (
    <div className="mainContainer">
      <Container >
        <Row className="justify-content-center ">
          <Col xs={12} sm={12} md={8} lg={8}>
            <ProfileDetails otherProfile={otherProfile} />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <ProfileSideBar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;

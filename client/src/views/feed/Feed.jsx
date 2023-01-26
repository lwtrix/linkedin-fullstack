import React from "react";
import React from "react";
import "./Feed.css";
import { Col, Container, Row } from "react-bootstrap";
import { LeftSideBar } from "./LeftSideBar";
import { MainContent } from "./MainContent";
import { NewsSidebar } from "./NewsSidebar";
import { useSelector } from "react-redux";

const Feed = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Row className="homepage text-center m-0">
      <Col xs={12} sm={12} md={4} lg={3}>
        <LeftSideBar />
      </Col>
      <Col xs={12} sm={12} md={8} lg={5}>
        <MainContent />
      </Col>
      <Col lg={4}>
        <NewsSidebar />
      </Col>
    </Row>
  );
};

export default Feed;

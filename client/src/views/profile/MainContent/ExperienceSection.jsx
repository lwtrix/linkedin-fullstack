import React, { useEffect, useState } from "react";
import "./experience-section.css";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Experience } from "./Experience/Experience";
import { AddExperienceModal } from "./Experience/AddExperienceModal";

export const ExperienceSection = ({ userId }) => {
  const navigate = useNavigate();

  const [experiences, setExperiences] = useState([]);
  const [user, setUser] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const [isOtherUser, setIsOtherUser] = useState(false);
  const handleClose = () => setShowAddModal(false);
  const handleShow = () => setShowAddModal(true);

  const getExperiences = async (id = user._id) => {
    if (id === user._id) {
      setIsOtherUser(false);
    } else {
      setIsOtherUser(true);
    }
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
      },
    };
    if (user) {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        options
      );
      const data = await res.json();

      setExperiences(data);
    }
  };

  useEffect(() => {
    if(user) {
    getExperiences(userId);
    }
  }, [userId]);

  return (
    <div className="experience-section">
      <h3>Experience</h3>
      {isOtherUser === false ? (
        <div className="controls">
          <div className="icon-container">
            <AiOutlinePlus className="icon" onClick={handleShow} />
          </div>
          <div className="icon-container">
            <FiEdit2
              className="icon"
              onClick={(e) => navigate("/profile/experiences")}
            />
          </div>
        </div>
      ) : null}

      {experiences.map((exp) => (
        <Experience key={exp._id} experience={exp} />
      ))}
      <AddExperienceModal
        refreshExperiences={getExperiences}
        user={user}
        handleClose={handleClose}
        show={showAddModal}
      />
    </div>
  );
};

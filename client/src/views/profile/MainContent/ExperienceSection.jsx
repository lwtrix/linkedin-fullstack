import React, { useEffect, useState } from "react";
import "./experience-section.css";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Experience } from "./Experience/Experience";
import { AddExperienceModal } from "./Experience/AddExperienceModal";

export const ExperienceSection = ({ user }) => {
  const navigate = useNavigate();

  const [experiences, setExperiences] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleClose = () => setShowAddModal(false);
  const handleShow = () => setShowAddModal(true);

  const getExperiences = async () => {
    const res = await fetch(`http://localhost:3001/experiences/${user?._id}`);
    const data = await res.json();
    setExperiences(data);
  };

  useEffect(() => {
    getExperiences();
  }, [experiences]);

  return (
    <div className="experience-section">
      <h3>Experience</h3>
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

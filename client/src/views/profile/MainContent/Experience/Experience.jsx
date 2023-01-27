import React, { useEffect, useState } from "react";
import "./experience.css";
// import { useSelector } from "react-redux";
import { FiEdit2, FiTrash } from "react-icons/fi";
// import { EditExperienceModal } from "../../../Experiences/EditExperienceModal";

export const Experience = ({ experience, canEdit, refreshExperiences }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [date, setDate] = useState({
    start: "",
    end: "",
  });

  const [showEditModal, setShowEditModal] = useState(false)
  const [user, setUser] = useState([])


  const handleClose = () => setShowEditModal(false);
  const handleShow = () => setShowEditModal(true);
  
  const formatDates = (start, end) => {

    let formatStart = null
    let formatEnd = null

    if(start) {
    const startDate = new Date(start.slice(0, 10));
    formatStart = `${monthNames[startDate.getUTCMonth()].slice(
      0,
      3
    )} ${startDate.getUTCFullYear()}`;
    }

    if(end) {
    const endDate = new Date(end.slice(0, 10));
    formatEnd = `${monthNames[endDate.getUTCMonth()].slice(
      0,
      3
    )} ${endDate.getUTCFullYear()}`;
    }

    setDate({
      start: formatStart,
      end: formatEnd,
    });
  };

  // const { user } = useSelector(state => state.user)

  const handleDelete = async () => {
    const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
        },
        method: 'DELETE'
      };

      await fetch(`https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences/${experience._id}`, options)
      refreshExperiences()
  }

  useEffect(() => {
    formatDates(experience.startDate, experience.endDate);
  }, []);

  return (
    <div className="experience">
      {console.log(date)}
      {canEdit === true ? (
        <div className="controls">
          <div className="icon-container">
            <FiEdit2 className="icon" onClick={() => handleShow()}/>
          </div>
          <div className="icon-container">
            <FiTrash className="icon" onClick={(e) => handleDelete()}/>
          </div>
          {/* <EditExperienceModal experience={experience} handleClose={handleClose} show={showEditModal} refreshExperiences={refreshExperiences}/> */}
        </div>
      ) : null}

      <img
        src="https://media.licdn.com/dms/image/C4E0BAQFcwSQZkXawRA/company-logo_100_100/0/1657116740014?e=1678924800&v=beta&t=sCCeLIVAnmtBNblmrl4ramInNAWlm8iZO9HZRcvnZhs"
        alt=""
      />
      <div className="experience-details">
        <span className="role">{experience.role}</span>
        <span className="company">{experience.company}</span>
        <span className="date">{`${date.start ? date.start : ''} ${date.end ? '- ' +  date.end : ''}`}</span>
        <span className="location">{experience.area}</span>
        <p className="description">{experience.description}</p>
      </div>
    </div>
  );
};

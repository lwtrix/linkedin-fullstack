import React from "react";
import "./follow.css";
import { BsInfoSquareFill, BsArrowRightShort } from "react-icons/bs";
import { Feed } from "../../Feed.jsx";

 export const Follow = () => {
  return (
    <div className="follow">
      <div className="add">
        <strong>
          <p>Add to your feed</p>
        </strong>
        <BsInfoSquareFill className="tag-i" />
      </div>
      <div className="feed-section">
        <Feed
          name="Money.pl"
          description="Company • Computer Software"
          imagen="https://media.licdn.com/dms/image/C4E0BAQE_Rf8hvbt0hA/company-logo_200_200/0/1642760733829?e=1678924800&v=beta&t=tLfhB2ocjOwMPYGfJxxnQvXLW6NqAJbdGlnVoeZ7HmI"
        />
        <Feed
          name="Pracuj.pl"
          description="Company • Human Resources"
          imagen="https://media.licdn.com/dms/image/C4E0BAQEgS3Q1DNfoKw/company-logo_100_100/0/1611157041750?e=1678924800&v=beta&t=VP_kbUGwxOj6o3WlzsW-yMXmgsorcXlEidCNorSmuPw"
        />
        <Feed
          name="Forbes"
          description="Company • Newspapers"
          imagen="https://media.licdn.com/dms/image/C4E0BAQHNKOn73XNMJA/company-logo_200_200/0/1646834077396?e=1678924800&v=beta&t=rhsFZBgbYe6JTsBlnvV4-dGcfd0sgbNn2cNcVpyQqJI"
        />
        <div className="recommendations">
          <a href="https://www.linkedin.com/feed/">
            View all the recommendations
            <BsArrowRightShort className="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};


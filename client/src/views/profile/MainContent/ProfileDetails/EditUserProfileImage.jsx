import React from "react";
import "./pictureUploader.css";
import { useState } from "react";
// import { useDispatch } from "react-redux";
export default function EditUserProfileImage() {
  // const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [helper, setHelper] = useState("");

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("profile", image);
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/63983fd0405bda0015091841/picture",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
          },
          method: "POST",
          body: formData,
        }
      );
      if (resp.ok) {
        setHelper("ok");
      } else {
        setHelper("not");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pictureUploader">
      <h5>Picture Uploader</h5>

      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <br />

      <hr />
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
}

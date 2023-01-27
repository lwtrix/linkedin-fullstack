import React, {useState, useEffect} from "react";
import "./create-post.css";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { getUserProfile } from "../../../../redux/actions";
import { NewPost } from "./NewPost";

export const CreatePost = () => {
  // const { user } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
const [user, setUser] = useState({});
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const handleClose = () => setShowNewPostModal(false);
  const handleShow = () => setShowNewPostModal(true);

  useEffect(() => {
    // dispatch(getUserProfile());
  }, []);

  return (
    <div className="create-post">
      {user && (
        <div className="img-container">
          <img src={user?.image} />
        </div>
      )}
      <input type="text" placeholder="Start a post" onClick={handleShow} />
      <NewPost user={user} handleClose={handleClose} show={showNewPostModal} />
    </div>
  );
};

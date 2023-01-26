import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./views/NavBar/NavBar";
import Profile from "./views/profile/Profile";
import Feed from "./views/feed/Feed";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

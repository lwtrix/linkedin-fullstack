import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./navBar.css";
import { AiFillHome } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsSharp } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { YouDropDown } from "./YouDropDown";
import { WorkDropDown } from "./WorkDropDown";
import { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { getUserProfile } from "../../redux/actions";
import { SearchResults } from "./Search/SearchResults";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  let [timeoutId, setTimeoutId] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const [youDropDown, setyouDropDown] = useState("off");
  const [workDropDown, setworkDropDown] = useState("off");
  const navigate = useNavigate();
  // const { user } = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  const fetchSearchResults = (term) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (term.length) {
      timeoutId = setTimeout(async () => {
        const options = {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
          },
        };

        const res = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/`,
          options
        );
        const users = await res.json();

        const filteredUsers = users.filter(
          (user) => user.name.toLowerCase().includes(term.toLowerCase()) || user.surname.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(filteredUsers);
      }, 500);
    } else {
      setSearchResults([]);
    }
  };

  const handleClickResult = () => {
    setShowSearch(false);
    setSearchResults([]);
  };

  useEffect(() => {
    // dispatch(getUserProfile());
  }, []);

  return (
    <Navbar expand="lg" id="navBar">
      <Container fluid>
        <div className="navBarDisplayFlex">
          <Link href="#">
            <img
              id="navBarLogo"
              alt="linkedin-logo"
              src="https://th.bing.com/th/id/R.be68438baf34312fb5f2683e13dd0551?rik=kblECYrU2iHeVA&pid=ImgRaw&r=0"
            />
          </Link>
          <div id="navbar-search-bar">
            <div>
              <ImSearch />
            </div>
            <div>
              <input
                type="search"
                // onChange={(e) => fetchSearchResults(e.target.value)}
                onInput={(e) =>
                  e.target.value.length
                    ? setShowSearch(true)
                    : setShowSearch(false)
                }
                placeholder="Search"
                id="no-outline"
              />
            </div>
            {showSearch ? (
              searchResults.length ? (
                <SearchResults
                  results={searchResults}
                  handleClickResult={handleClickResult}
                />
              ) : (null)
            ) : null}
          </div>
        </div>
        <div className="navBarDisplayFlex" id="navbar-flex-icons-container">
          <div className="navBarIcons" id="navbar-display-none">
            <div className="navBarIcons-icon">
              <Link href="#action1">
                <ImSearch />
              </Link>
            </div>
            <div className="navBarIcons-text">Search</div>
          </div>
          <div className="navBarIcons">
            <div className="navBarIcons-icon" onClick={(e) => navigate("/")}>
              <Link href="#action1">
                <AiFillHome />
                <Badge bg="danger" className="navBarBadge">
                  1
                </Badge>
              </Link>
            </div>
            <div className="navBarIcons-text">Home</div>
          </div>
          <div className="navBarIcons">
            <div className="navBarIcons-icon">
              <Link href="#action2">
                <MdPeopleAlt />
                <Badge bg="danger" className="navBarBadge">
                  1
                </Badge>
              </Link>
            </div>
            <div className="navBarIcons-text">Web</div>
          </div>
          <div className="navBarIcons">
            <div className="navBarIcons-icon">
              <Link href="#action1">
                <MdWork />
                <Badge bg="danger" className="navBarBadge">
                  1
                </Badge>
              </Link>
            </div>
            <div className="navBarIcons-text">Work</div>
          </div>
          <div className="navBarIcons">
            <div className="navBarIcons-icon">
              <Link href="#action2">
                <TbMessageCircle />
                <Badge bg="danger" className="navBarBadge">
                  1
                </Badge>
              </Link>
            </div>
            <div className="navBarIcons-text">Message</div>
          </div>
          <div className="navBarIcons">
            <div className="navBarIcons-icon">
              <Link href="#action1">
                <IoNotificationsSharp />
                <Badge bg="danger" className="navBarBadge">
                  1
                </Badge>
              </Link>
            </div>
            <div className="navBarIcons-text">Notifications</div>
          </div>
          <div className="navBarIcons" id="youPositionRelative">
            <div className="navBarIcons-icon imageContainer mt-2">
              {/* <div className="imageContainer">
                {user && (
                  <img
                    alt="profile"
                    src={user.image}
                    onClick={(e) => {
                      youDropDown !== "on"
                        ? setyouDropDown("on")
                        : setyouDropDown("off");
                    }}
                  />
                )}
              </div> */}
            </div>
            <div className="navBarIcons-text">
              <span>You</span>
              <IoMdArrowDropdown
                onClick={(e) => {
                  youDropDown !== "on"
                    ? setyouDropDown("on")
                    : setyouDropDown("off");
                }}
              />
            </div>
            {youDropDown !== "off" ? (
              <div id="youDropdown">
                <YouDropDown />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="navBarDisplayFlex" id="navBarWorkRightSide">
            <div
              className="navBarIcons"
              onClick={(e) => {
                workDropDown !== "on"
                  ? setworkDropDown("on")
                  : setworkDropDown("off");
              }}
            >
              <div className="navBarIcons-icon ml-1">
                <Link href="#action1">
                  <Badge bg="danger" className="navBarBadge">
                    1
                  </Badge>
                  <BsFillGrid3X3GapFill />
                </Link>
              </div>
              <div className="navBarIcons-text ml-1">
                Work
                <IoMdArrowDropdown
                  onClick={(e) => {
                    workDropDown !== "on"
                      ? setworkDropDown("on")
                      : setworkDropDown("off");
                  }}
                />
              </div>
            </div>
            <div className="navBarIcons" id="navBarTextOrange">
              <div className="navBarIcons-icon">
                <Link href="#action1">Try Premium</Link>
              </div>
              <div className="navBarIcons-text"></div>
              {workDropDown !== "off" ? (
                <div id="workDropDown">
                  <WorkDropDown
                    disappear={setworkDropDown}
                    workDropDown={workDropDown}
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};


export default NavBar;
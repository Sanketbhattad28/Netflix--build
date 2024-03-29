import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const setshowHandler = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setshowHandler);
    return () => window.removeEventListener("scroll", setshowHandler);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix_image"
        ></img>
        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Profile-logo"
        />
      </div>
    </div>
  );
};

export default Nav;

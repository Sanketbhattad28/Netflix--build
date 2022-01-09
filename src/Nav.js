import React, { useState, useEffect } from "react";
import "./nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

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
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix_image"
        ></img>
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Profile-logo"
        />
      </div>
    </div>
  );
};

export default Nav;

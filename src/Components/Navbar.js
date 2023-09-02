import React from "react";
import PropTypes from "prop-types";
import "../switch.css"
import Theme from "./Theme"
// import { NavLink } from "react-router-dom";

export default function Navbar(props) {

  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar_of_site">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <div
              className="navbar-brand"
              style={{
                display: "flex",
                width: "10vw",
                justifyContent: "flex-start",
              }}
            >
                <img
                  src={props.logo}
                  alt="Logo"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                  style={{ width: "39px", height: "27px" , margin: "0 13px"}}
                />
              {props.title}
            </div>
          </div>
        </nav>
        <Theme />
      </nav>
    </>
  );
}

Navbar.proptype = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Enter title",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqSUWGefeLef35q2txrO4W5gaQgjIrJoVvw&usqp=CAU",
};

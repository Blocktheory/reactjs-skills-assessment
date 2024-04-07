import React from "react";
import logo from "../../assets/images/logo.png";
import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header>
      <nav className={`navbar navbar-expand-lg bg-light ${classes.header}`}>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className={classes.navbar}>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

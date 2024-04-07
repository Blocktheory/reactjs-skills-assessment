import React from "react";
import coverImg from "../../assets/images/Rectangle 4.png";
import logo2 from "../../assets/images/logo2.png";
import classes from "./SignUp.module.scss";

import Form from "../../components/Form/Form";

const SignUp: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={`container ${classes.main}`}>
        <div className={`row ${classes["parent-container"]}`}>
          <div className={`col-md-6 ${classes["side-image"]}`}>
            <img src={coverImg} alt="" className={classes.image} />
            <div className={classes.text}>
              <img src={logo2} alt="logo" className={classes.logo2} />

              <div className={classes["text-container"]}>
                <p className={classes.title}>Explore the world</p>
                <p className={classes.description}>
                  Our versatile tool provides an extensive array of components,
                  igniting creativity and enhancing efficiency to streamline
                  workflows for designers.
                </p>
              </div>
            </div>
          </div>

          <Form />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

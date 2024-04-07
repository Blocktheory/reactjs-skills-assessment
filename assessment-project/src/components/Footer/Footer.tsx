import React from "react";
import classes from "./Footer.module.scss";
import logo from "../../assets/images/logo.png";
import payment from "../../assets/images/icons_payment 1.png";
import scrollBtn from "../../assets/images/button.png";

const Footer: React.FC = () => {
  return (
    <footer className={classes["footer_main"]}>
      <div className={classes.top}>
        <div className="container">
          <div className={`row ${classes["footer_container"]}`}>
            <div className={`col-lg-6 col-xxl-3 ${classes.company}`}>
              <div className={classes.logo}>
                <img src={logo} alt="" className={classes["company-logo"]} />
              </div>
              <p className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <div className={classes.socials}>
                <a
                  className={classes.social}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a
                  className={classes.social}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                  </svg>
                </a>
                <a
                  className={classes.social}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </a>
                <a
                  className={classes.social}
                  href="https://www.instagram.com/thinktoshare/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className={`col-lg-6 col-xxl-3 ${classes.widgets}`}>
              <div className={classes["widget-container"]}>
                <h4 className={classes.title}>CATALOG</h4>
                <div className={classes["widget-content"]}>
                  <ul>
                    <li className={classes.details}>Necklaces</li>
                    <li className={classes.details}>Hoodies</li>
                    <li className={classes.details}>Jewelry Box</li>
                    <li className={classes.details}>T-shirt</li>
                    <li className={classes.details}>Jacket</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`col-lg-6 col-xxl-3 ${classes.widgets}`}>
              <div className={classes["widget-container"]}>
                <h4 className={classes.title}>About Us</h4>
                <div className={classes["widget-content"]}>
                  <ul>
                    <li className={classes.details}>Our Producers</li>
                    <li className={classes.details}>Sitemap</li>
                    <li className={classes.details}>FAQ</li>
                    <li className={classes.details}>About Us</li>
                    <li className={classes.details}>Terms & Conditions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`col-lg-6 col-xxl-3 ${classes.widgets}`}>
              <div className={classes["widget-container"]}>
                <h4 className={classes.title}>CUSTOMER SERVICES</h4>
                <div className={classes["widget-content"]}>
                  <ul>
                    <li className={classes.details}>Contact Us</li>
                    <li className={classes.details}>Track Your Order</li>
                    <li className={classes.details}>Product Care & Repair</li>
                    <li className={classes.details}>Book an Appointment</li>
                    <li className={classes.details}>Shipping & Returns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src="../assets/images/Logo/footer_bar.png"
        alt=""
        className={classes["footer_bar"]}
      /> */}
      <div className={classes.bottom}>
        <div className="container">
          <div className="row">
            <div className={classes.info}>
              <p className={classes["left-side-details"]}>
                © 2022 Coral , Inc.
              </p>
              <div>
                <img src={payment} alt="payment" />
              </div>
              <div>
                <img src={scrollBtn} alt="payment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

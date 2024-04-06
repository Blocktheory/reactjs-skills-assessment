import React from "react";
import GroupNav from "../assets/GroupNav.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Linkdin from "../assets/Linkdin.png";
import Insta from "../assets/Insta.png";
import FooterCoral from "./FooterCoral";

const AboutCoral = () => {
  const Catlog = ["Necklaces", "Hoodies", "Jewelry Box", "T-Shirt", "Jacket"];
  const AboutUs = [
    "Our Producers",
    "Sitemap",
    "FAQ",
    "AboutUs",
    "Terms & Conditions",
  ];
  const Customers = [
    "Contact Us",
    "Track Your Order",
    "Product Care & Repair",
    "Book An Appointment",
    "Shipping & Returns",
  ];
  return (
    <>
    {/*  ---------------------------About Coral Footer------------------------- */}
      <div className=" ml-24 mb-11 ">
        <div className="container mx-auto   grid lg:grid-cols-4 gap-4  ">
          <div className=" pl-5  ">
            {/* -----------coral pic------------------- */}
            <div className="container ">
              <div className=" flex place-content-start ml-6   ">
                <img className=" h-3 mt-3 " src={GroupNav} alt="GroupNav" />
                <span className=" text-xl font-medium p-1 font-serif tracking-wide">
                  CORAL
                </span>
                <img className=" h-3 mt-3" src={GroupNav} alt="GroupNav" />
              </div>
            </div>
            {/* --------content------------- */}
            <div className="   mx-auto pl-6  ">
              <span className=" text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </span>
              <div className=" flex h-4  space-x-4  mt-0 place-content-start ">
                <img src={Facebook} alt="Facebook" />
                <img src={Linkdin} alt="Linkdin" />
                <img src={Twitter} alt="Twitter" />
                <img src={Insta} alt="Insta" />
              </div>
            </div>
          </div>

          <div className=" pl-20 space-y-0">
            <span className=" font-semibold  text-base ">CATLOG</span>

            {Catlog.map((Catlog, index) => (
              <div className=" text-sm text-gray-500 " key={index}>
                {Catlog}
              </div>
            ))}
          </div>
          <div className="pl-10 space-y-0">
            <span className=" font-semibold  text-base">ABOUT US</span>

            {AboutUs.map((Aboutus, index) => (
              <div className=" text-sm text-gray-500" key={index}>
                {" "}
                {Aboutus}
              </div>
            ))}
          </div>
          <div className="space-y-0 ">
            <span className=" font-semibold  text-base">CUSTOMER SERVICES</span>

            {Customers.map((Customer, index) => (
              <div className=" text-sm text-gray-500" key={index}>
                {Customer}
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterCoral/>
    </>
  );
};

export default AboutCoral;

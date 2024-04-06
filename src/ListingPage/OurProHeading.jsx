import React from "react";
import GroupNav from "../assets/GroupNav.png";
import ProductListing from "./ProductListing";

const OurProHeading = () => {


  return (
    <>

    {/* NavBar Coral */}
      <nav className=" grid bg-slate-100 h-9  sticky top-0">
        <div className=" flex place-content-center ">
          <img className=" h-3 mt-3 " src={GroupNav} alt="GroupNav" />
          <span className=" text-xl font-medium p-1 font-serif tracking-wide">
            CORAL
          </span>
          <img className=" h-3 mt-3" src={GroupNav} alt="GroupNav" />
        </div>
      </nav>
      
{/* OurProducts Heading */}
      <div className=" grid place-content-center mt-0  ">
        <span className="text-3xl font-semibold " >Our Products</span>
      </div>
      <ProductListing/>
    </>
  );
};

export default OurProHeading;

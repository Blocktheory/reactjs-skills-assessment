import React from "react";
import Rectangle from "../assets/Rectangle.png";
import Group from "../assets/Group.png";
import AccDetails from "../Account/AccDetails";

const CoralPic = () => {
  return (
    <>
     <div className=" flex  pl-36 pt-7  ">
      <div className="  pl-40 absolute text-white text-2xl flex justify-center ">
        <img className="pt-10 pb-5 " src={Group} alt="Group" />
        <span className=" pt-8 font-serif tracking-wide  bottom-0 pl-2 ">
          CORAL
        </span>
        
        <img className="pt-10 pb-5 pl-2 " src={Group} alt="Group" />
      </div>

      <div>
        <img className="  h-[37rem] w-[30rem] " src={Rectangle} alt="Mainpic" />
       
      </div>
{/* --------------Explore World------------------- */}
      <div class=" bottom-20  absolute text-slate-100  pl-[40px]">
<span className="  font-semibold  text-5xl  ">Explore the world</span>
<div className=" pt-5 max-w-sm text-slate-400 pl-5  ">
  <span>Our versatile tool provides an extensive array of
  components,igniting creativity and enhancing 
   efficiency to streamline workflows for designers.</span>
</div>
        
     
      </div>
      <AccDetails/>
      </div>
     
    </>
  );
};

export default CoralPic;




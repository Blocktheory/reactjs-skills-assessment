import React from "react";
import PaymentIcons from "../assets/PaymentIcons.png";
import Arrow from "../assets/Arrow.png";

const FooterCoral = () => {
  return (
    <>
      <footer class="  bg-slate-900  w-full shadow dark:bg-gray-900 fixed bottom-0 left-0 ">
        <div class="w-full flex max-w-screen-xl  p-1 justify-evenly  ">
          <span className=" text-white text-sm  "> © 2022 Coral , Inc.</span>

          <div className=" pl-10  ">
            <img src={PaymentIcons} alt="PaymentIcons" />
          </div>
          <div className="flex  ">
            <span className=" text-white text-sm  ">Scroll to top</span>
            <div><img src={Arrow} alt="Arrow" /></div>
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCoral;

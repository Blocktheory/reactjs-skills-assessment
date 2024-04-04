import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Product from "./components/Product";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmission = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="">
      <div className="">
        {formSubmitted ? <Product/> : <SignUp onSubmit={handleFormSubmission} />}
      </div>
    </div>
  );
}

export default App;

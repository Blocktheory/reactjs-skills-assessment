import React, { useState, useRef, useEffect } from "react";

const MultiSelectDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (e, option) => {
    e.stopPropagation();
    const index = selectedOptions.indexOf(option);
    if (index === -1) {
      setSelectedOptions([...selectedOptions, option]);
      props.onChange([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
      props.onChange(selectedOptions.filter((item) => item !== option));
    }
  };

  return (
    <div className="inline-block relative" ref={dropdownRef}>
      <button 
        type="button"
        onClick={toggleDropdown}
        className="bg-black border border-gray-300 rounded-md px-4 py-2 flex items-center  w-40 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent justify-center "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.08203 4.25391C3.27344 3.87109 3.65625 3.625 4.09375 3.625H15.9062C16.3164 3.625 16.6992 3.87109 16.8906 4.25391C17.0547 4.63672 17 5.10156 16.7266 5.42969L11.75 11.5273V15C11.75 15.3555 11.5586 15.6562 11.2578 15.793C10.957 15.9297 10.6016 15.9023 10.3281 15.7109L8.57812 14.3984C8.35938 14.2344 8.25 13.9883 8.25 13.6875V11.5273L3.24609 5.42969C2.97266 5.10156 2.91797 4.63672 3.08203 4.25391Z"
            fill="white"
          />
        </svg>
        <span className="text-white">Filter</span>
      </button>
      {isOpen && (
        <div className="absolute w-full z-10 bg-white shadow-lg rounded-md mt-2 overflow-y-auto max-h-60">
          <div className="flex flex-col space-y-1">
            {props?.options.map((option) => {
              return (
                <label
                  className="inline-flex items-center"
                  onClick={(e) => handleOptionClick(e, option.value)}
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option.value)}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2">{option.name}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;

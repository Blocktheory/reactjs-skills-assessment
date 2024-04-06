import React, { useEffect, useState } from "react";
import axios from "axios";
import AboutCoral from "./AboutCoral";

const ProductListing = () => {
  const [userdata, setUserdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response);
      setUserdata(response.data);
    });
  }, []);

  const filteredData = userdata.filter((data) =>
    data.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container mx-auto  pl-16 ">
        {/* Filter button */}
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setShowSearchBar(!showSearchBar)}
            className=" bg-slate-900 text-white rounded-md text-sm mr-14 w-14 h-6 mt-3"
          >
            {showSearchBar ? "Filter" : "Filter"}
          </button>
        </div>
        {/* Search input */}
        {showSearchBar && (
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md text-sm p-0.5 mr-8 "
            />
          </div>
        )}
        <div className="grid lg:grid-cols-4 gap-5">
          {currentItems.map((data) => {
            const { id, title, description, price, category, image, rating } = data;
            return (
              <div className="overflow-hidden appearance-none pb-2 shadow-md w-56 text-sm cursor-pointer" key={id}>
                <img className="pl-14 h-28" src={data.image} alt="Joggers" />
                <div className="justify-items-start hyphens-auto font-medium pl-2">{data.title}</div>
                <div className="flex content-end">
                  <div className="pt-3 text-slate-400 pl-2">{data.category}</div>
                  <div className="place-content-end pl-16 font-bold pr-2">${data.price}</div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Pagination */}
        <div className="mt-4 flex justify-center mr-14">
          {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 h-5 w-5  mr-3 text-xs rounded-full ${
                currentPage === index + 1 ? " m bg-slate-900 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <AboutCoral />
    </>
  );
};

export default ProductListing;

import React, { useEffect, useState } from "react";
import MultiSelectDropdown from "../../components/customMultiselect/multiSelect";
import { filterOption } from "../../utils/constants";

function Products() {
  const [productDetails, setProductDetails] = useState<any>();
  const [productList, setProductList] = useState<any>();
  const productRequest = async () => {
    fetch("https://fakestoreapi.com/products", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProductDetails(data);
        setProductList(data);
        // Process the fetched data here
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const filterProducts = (option) => {
    if (option?.length > 0) {
      const filteredProducts = productList?.filter((product) =>
        option.includes(product.category)
      );
      setProductDetails(filteredProducts);
    } else {
      setProductDetails(productList);
    }
  };
  useEffect(() => {
    productRequest();
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        <img className="w-40 text-center" src={"logo.svg"} alt="logo" />
      </div>
      <div className="flex flex-col justify-center items-center text-bold">
        <div className="my-5">
          <p className="font-bold text-4xl">Our Products</p>
        </div>
        <div>
          <MultiSelectDropdown
            options={filterOption}
            onChange={filterProducts}
          ></MultiSelectDropdown>
        </div>
      </div>
      <div className="product-list overflow-auto  grid grid-cols-4 gap-4 ">
        {productDetails && productDetails?.length > 0 ? (
          productDetails?.map((product) => {
            return (
              <div
                key={product.id}
                className="max-w-sm h-full relative rounded overflow-hidden shadow-lg mb-2 flex-col justify-between"
              >
                <div>
                  <img
                    className="product-image "
                    src={product.image}
                    alt="Product Image"
                  />
                </div>

                <div className="px-6 py-6">
                  <div className="font-bold text-xl mb-2">{product.title}</div>
                </div>
                <div className="flex absolute bottom-0 w-full justify-between px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {product.category}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    ${product.price}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div>No data </div>
        )}
      </div>
        <footer className="bg-white text-black pt-4 absolute bottom-0 w-full">
          <div>

          <div className="container mx-auto flex justify-around ">
            <div>
              <img
                className="w-40 text-center mb-4"
                src={"logo.svg"}
                alt="logo"
              />

              <p className="max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <div className="flex flex-row gap-x-5 mt-4 ">
                <img
                  className="w-5 h-5 text-center "
                  src={"facebook.png"}
                  alt="icons"
                />
                 <img
                  className="w-5 h-5 text-center "
                  src={"linkedin.png"}
                  alt="icons"
                />
                 <img
                  className="w-5 h-5 text-center "
                  src={"twitter.png"}
                  alt="icons"
                />
                 <img
                  className="w-5 h-5 text-center "
                  src={"instagram.png"}
                  alt="icons"
                />
              </div>
            </div>
            <div>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300 font-bold">
                  CATELOG
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  Necklaces
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  Hoodies
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  Jewelry box
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  T-Shirt
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  Jacket
                </a>
              </li>
            </div>

            <div>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300 font-bold">
                  ABOUT US
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  Our Producers
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  Sitemap
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  FAQ
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  About Us
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  Terms and Conditions
                </a>
              </li>
            </div>

            <div>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300 font-bold">
                  CUSTOMER SERVICES
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  Contact Us
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  Track Your Order
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  {" "}
                  Product Care & Repair
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  Book An Appointment
                </a>
              </li>
              <li className="list-none my-2">
                <a href="#" className="hover:bg-gray-300">
                  Shipping and Returns
                </a>
              </li>
            </div>
          </div>
          <div className="footer-bottom flex flex-row justify-around items-center py-2 ">
            <span>

            <p className="text-white">© 2022 Coral , Inc.</p>
            </span>
            <span>
            <img
                className="w-40 text-center "
                src={"iconsPayment.png"}
                alt="logo"
              />

            </span>
            <span className="flex items-center">
              <p className="text-white">Scroll to top</p>
              <span>
                <img
                 className="h-5 text-center "
                 src={"upArrow.svg"}
                 alt="logo"
               />
              </span>
              
            </span>
          </div>
          </div>
        </footer>
      </div>
   
  );
}

export default Products;

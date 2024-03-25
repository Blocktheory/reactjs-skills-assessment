import axios from "axios";
export const getApi = async (filter) => {
  console.log(filter);
  let url = "https://fakestoreapi.com/products?limit=8";
  if (filter) {
    url = `https://fakestoreapi.com/products/category/${filter}?limit=8`;
  } 
  try {
    console.log(url);
    const response = await axios.get(url);
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

/* eslint-disable react-hooks/rules-of-hooks */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const add_product = () => {
  const [category, setCategory] = useState([]);

  const userData = JSON.parse(localStorage.getItem("user"));
  console.log("ini adalah user data", userData);
  const userID = userData.id;
  const token = userData.token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/categories", { headers: { Authorization: token } });
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-2xl font-serif italic">Add Product</h1>
        <Link to={"/products-seller"}>
          <button className="border rounded-lg p-2 bg-green-600">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 mt-2">
        <div className="">
          <input type="number" hidden defaultValue={userID} name="user_id" />
          <div className="form-input mb-3">
            <label htmlFor="product_name" className="text-lg font-serif">
              Product Name
            </label>
            <br />
            <input type="text" className="border rounded-lg p-2 w-full" name="product_name" />
          </div>
          <div className="form-input mb-3">
            <label htmlFor="category_id" className="text-lg font-serif">
              Category
            </label>
            <br />
            <select name="category_id" id="category_id" className="border rounded-lg p-2 w-full">
              <option value="">- Select Category -</option>
              {category.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-input mb-3">
            <label htmlFor="price" className="text-lg font-serif">
              Price
            </label>
            <br />
            <input type="number" className="border rounded-lg p-2 w-full" name="price" />
          </div>
        </div>
      </div>
    </>
  );
};
export default add_product;

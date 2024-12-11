/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus, faTrash, faPencil, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const products = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  const userData = JSON.parse(localStorage.getItem("user"));
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products/user", { headers: { Authorization: token } });
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log("ini data product", product);

  return (
    <>
      <div className="container p-3 mb-3 mx-auto rounded-lg">
        <div className="flex justify-end">
          <div className="mr-auto w-1/2">
            <input type="text" className="border p-2 w-[80%] rounded-lg" placeholder="Search product ..." />
            <button className="border p-2 ml-2 rounded-lg">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>

          <button className="border p-2 rounded-lg bg-blue-800 text-white font-serif italic hover:bg-blue-700">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Product
          </button>
        </div>
      </div>

      <div className="container p-3 mx-auto border rounded-lg mb-3">
        <div className="grid grid-cols-4 justify-items-center">
          <div className="font-serif">
            <h1 className="mb-2">Category</h1>
            <select name="" id="" className="border p-2 rounded-lg bg-gray-200">
              <option value="">All Category</option>
              {category.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="font-serif">
            <h1 className="mb-2">Status</h1>
            <select name="" id="" className="border p-2 rounded-lg bg-gray-200">
              <option value="">All Status</option>
              <option value="">Status dari database</option>
            </select>
          </div>
          <div className="font-serif">
            <h1 className="mb-2">Stock</h1>
            <select name="" id="" className="border p-2 rounded-lg bg-gray-200">
              <option value="">All Stock</option>
              <option value="">Stock dari database</option>
            </select>
          </div>
          <div className="font-serif">
            <h1 className="mb-2">Price</h1>
            <select name="" id="" className="border p-2 rounded-lg bg-gray-200">
              <option value="">All Price</option>
              <option value="">Price dari database</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container p-3 mx-auto rounded-lg">
        <table className="table-bordered font-serif">
          <thead>
            <tr className="border-b">
              <th className="w-80">Product Name</th>
              <th className=" w-40">Price</th>
              <th className=" w-40">Category</th>
              <th className=" w-40">Status</th>
              <th className=" w-60">Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => (
              <tr key={index} className="text-center border-b">
                <td>
                  <div className="flex gap-2 justify-center p-2">
                    <img src={item.ImageProduct[0].image_url} alt="gambar produk" className="w-20 h-auto m-1" />
                    {item.name}
                  </div>
                </td>
                <td>Rp. {item.price}</td>
                <td>{item.Categories.name}</td>
                <td>Active</td>
                <td>
                  <div className="flex gap-2 justify-center">
                    <Link to={`../product/user/${item.id}`}>
                      <button className="border rounded-lg p-2 bg-green-600 text-white">
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </button>
                    </Link>
                    <button className="border rounded-lg p-2 bg-yellow-600 text-white">
                      <FontAwesomeIcon icon={faPencil} />
                    </button>
                    <button className="border rounded-lg p-2 bg-red-600 text-white">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default products;

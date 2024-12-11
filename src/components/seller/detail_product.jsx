/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const detail_product = () => {
  const [product, setProduct] = useState({});

  const userData = JSON.parse(localStorage.getItem("user"));
  const token = userData.token;
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/product/user/${id}`, { headers: { Authorization: token } });
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, {});

  console.log("ini data product by id", product);

  return (
    <>
      <div className="flex justify-between mb-5">
        <h1 className="font-serif italic text-2xl">Varian Produk {product.name}</h1>
        <Link to={"/products-seller"}>
          <button className="border rounded-lg p-2 bg-green-500">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </Link>
      </div>
      <table>
        <thead>
          <tr className="border-b">
            <th className="w-40">Size</th>
            <th className="w-40">Color</th>
            <th className="w-40">Stock</th>
          </tr>
        </thead>
        <tbody>
          {product.ProductSize?.map((sizeItem, index) => {
            const colorItem = product.ColorProduct[index]; // Ambil item warna berdasarkan indeks
            return (
              <tr key={index} className="border-b text-center">
                <td className="">{sizeItem.Sizes.name}</td>
                <td className="">{colorItem ? colorItem.Colors.name : "N/A"}</td>
                <td className="">{colorItem ? colorItem.stock : "N/A"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default detail_product;

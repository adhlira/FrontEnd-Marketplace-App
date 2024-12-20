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

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  console.log("ini data detail product", product);

  return (
    <>
      <div className="flex justify-between mb-5">
        <h1 className="font-serif italic text-2xl">Detail {product.name}</h1>
        <Link to={"/products-seller"}>
          <button className="border rounded-lg p-2 bg-green-500">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 rounded-lg">
        <div className="p-2 rounded-lg">
          <h4 className="text-lg font-serif font-semibold">Description</h4>
          <p className="text-base font-serif">{product.description}</p>
          <br />
          <h4 className="text-lg font-serif font-semibold">Price </h4>
          <p className="text-base font-serif">{formatRupiah(product.price)}</p>
          <br />
          <h4 className="text-lg font-serif font-semibold">Category </h4>
          <p className="text-base font-serif">{product.Categories?.name}</p>
          <br />
          <h4 className="text-lg font-serif font-semibold mb-2">Data Stock</h4>
          <table>
            <thead>
              <tr className="border-b">
                <th className="w-40">Size</th>
                <th className="w-40">Color</th>
                <th className="w-40">Stock</th>
              </tr>
            </thead>
            <tbody>
              {product.DetailProduct?.map((item, index) => (
                <tr key={index} className="border-b text-center">
                  <td className="">{item.Sizes?.name}</td>
                  <td className="">{item.Colors?.name}</td>
                  <td className="">{item.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-2 rounded-lg">
          <h4 className="text-lg font-serif font-semibold">Image Product</h4>
          <br />
          <div className="grid grid-cols-4 gap-2">
            {product.ImageProduct?.map((item, index) => (
              <div key={index} className="gap-2 border rounded-lg">
                <img src={item.image_url} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default detail_product;

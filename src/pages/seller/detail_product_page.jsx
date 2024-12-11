import Navbar from "../../components/navbar.jsx";
import Sidebar from "../../components/sidebar.jsx";
import DetailProduct from "../../components/seller/detail_product.jsx";

const detail_product_page = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mb-2">
        <div className="flex">
          <div className="w-1/4 bg-green-800 text-white h-screen">
            <Sidebar />
          </div>
          <div className="w-full border p-3 h-screen">
            <DetailProduct />
          </div>
        </div>
      </div>
    </>
  );
};
export default detail_product_page;

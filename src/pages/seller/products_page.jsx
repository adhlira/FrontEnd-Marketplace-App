import Navbar from "../../components/navbar.jsx";
import Sidebar from "../../components/sidebar.jsx";
import Products from "../../components/seller/products.jsx";

const products_page = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mb-5">
        <div className="flex">
          <div className="w-1/4 bg-green-800 text-white h-screen">
            <Sidebar />
          </div>
          <div className="w-full border p-3 h-screen">
            <Products />
          </div>
        </div>
      </div>
    </>
  );
};
export default products_page;

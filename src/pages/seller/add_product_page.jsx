import AddProduct from "../../components/seller/add_product.jsx";
import Navbar from "../../components/navbar.jsx";
import Sidebar from "../../components/sidebar.jsx";

const AddProductPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mb-2">
        <div className="flex">
          <div className="w-1/4 bg-green-800 text-white h-screen">
            <Sidebar />
          </div>
          <div className="w-full border p-3 h-screen">
            <AddProduct />
          </div>
        </div>
      </div>
    </>
  );
};
export default AddProductPage;

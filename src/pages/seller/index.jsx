import Navbar from "../../components/navbar.jsx";
import Sidebar from "../../components/sidebar.jsx";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mb-5">
        <div className="flex">
          <div className="w-1/4 h-screen bg-green-800 text-white">
            <Sidebar />
          </div>
          <div className="w-full border text-center p-5 h-screen">
            <h1>Selamat Datang di Dashboard Admin</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default index;

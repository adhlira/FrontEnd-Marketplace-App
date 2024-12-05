/* eslint-disable react-hooks/rules-of-hooks */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTag, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

const sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { to: "/index-seller", label: "Dashboard", icon: faHome },
    { to: "/products-seller", label: "Products", icon: faTag },
  ];

  const handleLogout = () => {
    // Hapus data autentikasi
    localStorage.removeItem("user"); // Contoh: hapus token dari localStorage
    console.log("ini adalah data di localstorage", localStorage.getItem("user"));
    alert("Anda telah logout, Terima Kasih !");
    navigate("/"); // Arahkan ke halaman login
  };
  return (
    <>
      <div className="p-5">
        <ul className="">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link to={link.to} key={link.to}>
                <li className={`font-serif text-lg mb-10 hover:border p-2 rounded-lg ${isActive ? "bg-green-700 p-2 rounded-lg text-white" : ""}`}>
                  <FontAwesomeIcon icon={link.icon} className="" width="70px" />
                  {link.label}
                </li>
              </Link>
            );
          })}
          <li onClick={handleLogout} className="font-serif text-lg p-2 mb-10 hover:border rounded-lg cursor-pointer text-white">
            <FontAwesomeIcon icon={faSignOutAlt} className="" width="70px" />
            Logout
          </li>
        </ul>
      </div>
    </>
  );
};
export default sidebar;

/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);


  return (
    <>
      <div className="container mx-auto border p-3 mt-5 bg-green-800">
        <div className="flex items-center text-white">
          <h1 className="text-3xl font-serif font-bold">FashNest</h1>
          <FontAwesomeIcon icon={faUser} className="border rounded-full p-2 ml-auto" />
          <p className="ml-2 mr-2 font-serif italic">Halo, {user.name}</p>
        </div>
      </div>
    </>
  );
};
export default navbar;

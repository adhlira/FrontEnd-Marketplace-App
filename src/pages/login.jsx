/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log(response);

      if (response.status === 200) {
        // Simpan data user di localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        alert("Succesfully Login!");
        navigate("/index-seller");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message);
        console.log("Ini adalah error message : ", errorMessage);
      }
      // setEmail("");
      // setPassword("");
    }
  };

  return (
    <>
      <div className="bg-blue-800 flex justify-center h-screen">
        <div className="container mx-auto place-self-center rounded-md p-5 w-80 h-96 bg-gray-800 font-serif">
          <h1 className="text-white text-center text-2xl mb-3">Sign In</h1>
          <h3 className="text-white text-center text-sm mb-10">Unite with style, sell with confidence</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={`shadow appearance-none w-full rounded-lg border p-2 mt-5 leading-tight focus:outline-none focus:shadow-outline ${errorMessage ? "border-red-500" : ""}`}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <input
              type="password"
              name="password"
              id="password"
              className={`shadow appearance-none w-full rounded-lg border p-2 mt-5 leading-tight focus:outline-none focus:shadow-outline ${errorMessage ? "border-red-500" : ""}`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderColor: errorMessage.password ? "red" : "" }}
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button type="submit" className="w-full p-2 border rounded-full bg-blue-800 mt-10 text-white hover:bg-blue-700">
              LOGIN
            </button>
            <div className="flex mt-5">
              <div className="flex-1 text-center">
                <p className="text-white text-xs">Dont have an account yet ?</p>
              </div>

              <Link to={"/sign_up"}>
                <p className="text-xs mr-5 text-white hover:underline">Sign up here</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;

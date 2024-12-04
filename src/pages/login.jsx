/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log("Ini adalah response", response);

      if (response.status === 200) {
        // Simpan data user di localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        const roleId = response.data.user.role_id;
        console.log("ini adalah data user", response.data.user);
        alert("Succesfully Login!");
        if (roleId == 1) {
          navigate("/index-seller");
        } else {
          navigate("/home");
        }
      }
    } catch (error) {
      console.log("ini adalah error", error);
      if (error.response && error.response.status === 400) {
        alert("Email atau password salah");
        setEmail("");
        setPassword("");
      }
    }
  };

  return (
    <>
      <div className="bg-blue-800 flex justify-center h-screen">
        <div className="container mx-auto place-self-center rounded-md p-5 w-80 h-[450px] bg-gray-800 font-serif">
          <h1 className="text-white text-center text-2xl mb-3">Sign In</h1>
          <h3 className="text-white text-center text-sm mb-10">Unite with style, sell with confidence</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={`shadow appearance-none w-full rounded-lg border p-2 mt-5 leading-tight focus:outline-none focus:shadow-outline`}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              required
            />
            <div className="mb-4 mt-5">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className={`shadow appearance-none w-full rounded-lg border p-2 mt-5 leading-tight focus:outline-none focus:shadow-outline`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center px-2 mt-4 text-gray-500 focus:outline-none">
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.166 10.11C3.83 6.55 6.97 4 10 4c3.03 0 6.17 2.55 7.833 6.11a1.5 1.5 0 010 1.78C16.17 13.45 13.03 16 10 16c-3.03 0-6.17-2.55-7.833-6.11a1.5 1.5 0 010-1.78zM10 6a6.002 6.002 0 00-5.884 5.26C5.335 11.422 7.49 13 10 13c2.51 0 4.665-1.578 5.884-3.74A6.002 6.002 0 0010 6zm0 2a2 2 0 110 4 2 2 0 010-4z" />
                      <path d="M10 8a2 2 0 100 4 2 2 0 000-4zm0 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 3a7 7 0 100 14 7 7 0 000-14zM10 1a9 9 0 110 18A9 9 0 0110 1z" />
                      <path d="M14.828 5.172a4 4 0 010 5.656 1 1 0 01-1.414-1.414 2 2 0 000-2.828 1 1 0 111.414-1.414zM5.172 5.172a4 4 0 015.656 0 1 1 0 11-1.414 1.414 2 2 0 00-2.828 0 1 1 0 11-1.414-1.414z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
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

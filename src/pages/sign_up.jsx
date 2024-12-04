/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const sign_up = () => {
  const [data, setData] = useState({ name: "", email: "", password: "", address: "", phone_number: "", role_id: null });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setData((prev) => ({
        ...prev,
        role_id: checked ? parseInt(value) : null,
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("ini adalah user data", data);

    try {
      const response = await axios.post("http://localhost:3000/sign-up", data);
      console.log("ini adalah response", response);

      if (response.status === 200) {
        alert("Sign Up User successfully");
        navigate("/");
      }
    } catch (error) {
      console.log("Terjadi kesalahan", error);
    }
  };

  return (
    <>
      <div className="bg-blue-800 flex justify-center h-screen">
        <div className="container mx-auto p-5 border rounded-md bg-gray-800 w-[800px] font-serif mb-1 mt-1">
          <h1 className="text-white text-center text-2xl mb-10">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="name" className="text-white">
                  Name
                </label>
                <input type="text" className="w-full rounded-lg border p-2 mt-2 mb-5" name="name" placeholder="Your name" onChange={handleChange} value={data.name} required />

                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <input type="text" name="email" id="email" className="w-full rounded-lg border p-2 mt-2 mb-5" placeholder="Your Email" onChange={handleChange} value={data.email} required />

                <label htmlFor="address" className="text-white">
                  Address
                </label>
                <textarea name="address" id="address" className="w-full rounded-lg mt-2 h-36" placeholder=" Your address" onChange={handleChange} value={data.address} required></textarea>
              </div>
              <div className="flex-1">
                <label htmlFor="phone_number" className="text-white">
                  Phone Number
                </label>
                <input type="text" name="phone_number" id="phone_number" className="w-full p-2 mt-2 mb-5 rounded-lg" placeholder="Your phone number" onChange={handleChange} value={data.phone_number} required />
                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} name="password" id="password" className="w-full p-2 mt-2 mb-5 rounded-lg" placeholder="Your password" onChange={handleChange} value={data.password} required />
                  <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center px-2 -mt-3 text-gray-500 focus:outline-none">
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
                <label htmlFor="user_type" className="text-white">
                  User Type
                </label>
                <br />
                <div className="flex items-center space-x-2 mt-2">
                  <input type="checkbox" name="role_id" id="seller" value="1" className="text-white" checked={data.role_id === 1} onChange={handleChange} />
                  <p className="text-white">Seller</p>

                  <input type="checkbox" name="role_id" id="buyer" value="2" className="text-white" checked={data.role_id === 2} onChange={handleChange} />
                  <p className="text-white">Buyer</p>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full p-2 border rounded-full bg-blue-800 mt-10 text-white hover:bg-blue-700">
              SIGN UP
            </button>
            <div className="flex mt-5">
              <div className="flex-1 text-center">
                <p className="text-white text-xs">Already have an account ?</p>
              </div>

              <div className="flex-1 text-center">
                <Link to={"/"}>
                  <p className="text-xs mr-5 text-white hover:underline">Sign In here</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default sign_up;

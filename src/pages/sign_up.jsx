/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const sign_up = () => {
  const [data, setData] = useState({ name: "", email: "", password: "", address: "", phone_number: "", role_id: "" });

  const navigate = useNavigate();

  const handleCheckbox = (event) => {
    const value = parseInt(event.target.value);
    if (event.target.checked) {
      setUserType((prev) => [...prev, value]);
    } else {
      setUserType((prev) => prev.filter((role) => role !== value));
    }
  };

  const handleChange = (e) => {
    const [name, value] = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      address: data.address,
      phone_number: data.phone_number,
      role_id: data.role_id,
    };
    console.log("ini adalah user data", userData);

    try {
      const response = await axios.post("http://localhost:3000/sign-up", userData);
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
                <input type="password" name="password" id="password" className="w-full p-2 mt-2 mb-5 rounded-lg" placeholder="Your password" onChange={handleChange} value={data.password} required />
                <label htmlFor="user_type" className="text-white">
                  User Type
                </label>
                <br />
                <div className="flex items-center space-x-2 mt-2">
                  <input type="checkbox" name="role_id" id="seller" value="1" className="text-white" onChange={handleCheckbox} />
                  <p className="text-white">Seller</p>

                  <input type="checkbox" name="role_id" id="buyer" value="2" className="text-white" onChange={handleCheckbox} />
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

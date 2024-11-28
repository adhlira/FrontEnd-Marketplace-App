import { Link } from "react-router-dom";

function login() {
  return (
    <>
      <div className="bg-blue-800 flex justify-center h-screen">
        <div className="container border mx-auto place-self-center rounded-md p-5 w-80 h-96 bg-gray-800 font-serif">
          <h1 className="text-white text-center text-2xl mb-10">Welcome Back</h1>
          <form action="" className="">
            <input type="text" className="w-full rounded-lg border p-2 mt-5" placeholder="Email" name="email" />
            <input type="password" name="password" id="password" className="w-full rounded-lg border p-2 mt-5" placeholder="Password" />
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
}

export default login;

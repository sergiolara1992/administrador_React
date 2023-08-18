import React from "react";
import { FcGoogle } from "react-icons/fc"

const Home = () => {
  return (
    <div className="container grid grid-flow-col items-center justify-center gap-20   ">


      <div>
        <img
          className=""
          src="https://www.dogbible.com/i/es/weimaranerprofile.png"
          alt=""
        />
      </div>

      <div className="shadow px-10 py-20 rounded-3xl border-2 border-gray-100 mr-4 ">
        <h1 className="text-5xl font-semibold text-center">Welcome Back</h1>
        <p className="font-medium text-lg text-gray-500 mt-5 text-center">
          Please enter your dates
        </p>

        <div className="mt-8">
          <label className="text-xl font-bold">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-8">
          <label className="text-xl font-bold">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your password"
          />
        </div>
        <div className="mt-8 flex justify-between items-center text-lg font-bold">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2  text-base" for="remember">
              Remember for 30 days
            </label>
          </div>

          <button className="font-medium text-base text-violet-600">
            Forgot password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 transition-all bg-violet-500 hover:bg-blue-900 text-white font-bold py-3 rounded-xl">
            Sign in
          </button>
          <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all ">
            <FcGoogle className=" " />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

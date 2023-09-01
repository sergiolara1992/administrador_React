import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

import IMAGE from '../../public/weimaraner shutterstock_367131038 klein .png'
import { Link } from "react-router-dom";

const Home = (props) => {
  


  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  const { email, password } = users;

  const [userData, setUserData] = useState()

  const handleChange = (e) => {
    setUsers({
      ...users,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }

    const register =
      "https://ukks5dvo8b.execute-api.us-east-1.amazonaws.com/dev/userpet/find";

    axios
      .post(register, users)
      .then((response) => {
        
       setUserData(JSON.stringify(response.data));

        if (response.data.email === null) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else {
         return (
           <div>
             <p>Inicio de sesión exitoso. ¡Bienvenido!</p>
             <Link to={ "/welcome"} state: {userData} >
               mi link
             </Link>
           </div>
         );

         console.log(JSON.stringify(props));
          /* props.setUser(response.data); */


        }
      })

      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });

     
  };

 

  return (
    <div className="container grid md:grid-flow-col  items-center justify-center gap-20 ">
      <div>
        <img src={IMAGE} alt="" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="shadow px-10 py-20 rounded-3xl border-2 border-gray-300 mr-4 ">
          <h1 className="text-5xl font-semibold text-center">Welcome Back</h1>
          <p className="font-medium text-lg text-gray-500 mt-5 text-center">
            Please enter your dates
          </p>

          <div className="mt-8">
            <label className="text-xl font-bold">Email</label>
            <input
              id="email"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your email"
              value={users.email}
              onChange={handleChange}
            />
          </div>
          <div className="mt-8">
            <label className="text-xl font-bold">Password</label>
            <input
              id="password"
              type="password"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your password"
              value={users.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-8 flex justify-between items-center text-lg font-bold">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 text-base" htmlFor="remember">
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
              <FcGoogle />
              Sign in with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;

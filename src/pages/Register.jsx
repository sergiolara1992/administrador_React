
import { useState } from "react";
import axios from "axios";


const Register = () => {
  const [nombre, setNombre] = useState("");

  

  const [user, setUser] = useState({
    email: "",
    firstName: "",
    middleName: "",
    firstLastName: "",
    secondLastName: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log("primerPaso");

    
     /* PETICIONES AXIOS */

     const loginUrl =
       "https://ukks5dvo8b.execute-api.us-east-1.amazonaws.com/dev/userpet/create";

     axios.post(loginUrl, user).then((response) => {});
   };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="shadow px-10 py-20 rounded-3xl border-2 border-gray-300 mr-4 mb-8   ">
          <h1 className="text-5xl font-semibold mt-4 mb-10">
            Create your account
          </h1>

          <div className="grid gap-5 md:grid-cols-2 ">
            <div className="mt-8">
              <label className="text-xl font-bold">First Name</label>
              <input
                id="firstName"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your First Name"
                value={user.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="mt-8">
              <label className="text-xl font-bold">Middle Name</label>
              <input
                id="middleName"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your middle Name"
                value={user.middleName}
                onChange={handleChange}
              />
            </div>
            <div className="mt-8">
              <label className="text-xl font-bold"> First Last Name</label>
              <input
                id="firstLastName"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your first Last Name"
                value={user.firstLastName}
                onChange={handleChange}
              />
            </div>
            <div className="mt-8">
              <label className="text-xl font-bold">Second Last Name</label>
              <input
                id="secondLastName"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your Second Last Name"
                value={user.secondLastName}
                onChange={handleChange}
              />
            </div>
            <div className="mt-8">
              <label className="text-xl font-bold">Email</label>
              <input
                id="email"
                type="email"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-8">
              <label className="text-xl font-bold">Password</label>
              <input
                id="password"
                type="password"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder=" Enter Password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="bg-indigo-600 p-3 text-white text-center uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors mt-20 rounded-lg active:scale-[.98] active:duration-75 transition-all ">
            <button type="submit">REGISTER</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;



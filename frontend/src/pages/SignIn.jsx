import React, { useContext, useState } from "react";
import { ArrowRight } from "lucide-react";
import logo from "../Asset/Logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../utiles/AuthContextProvider";
import axios from "axios";
const SignIn = () => {
  //* CREATE THE INITIAL STATE FOR FORM
  let initialState = {
    email: "",
    password: "",
  };

  //* CREATE THE FORM STATE
  const [fromState, setFormState] = useState(initialState);
  const { authState, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  //* FUNCTION TO CHANGE THE VALUE OF INPUT BOX
  const handleChange = (e) => {
    let { id, value } = e.target;
    setFormState({ ...fromState, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fromState.email === "" || fromState.password === "") {
      alert("All Fields Are Required");
    } else if (fromState.password.length < 8) {
      alert("Password Must Be At Least 8 Characters Long");
    } else {
      axios
        .post(`${process.env.REACT_APP_URL}users/login`, fromState)
        .then((response) => {
          // console.log(response.data.token);
          loginUser(response.data.token);
          localStorage.setItem(
            "adminToken",
            JSON.stringify(response.data.token)
          );
        })
        .catch((error) => {
          console.log(error.massage);
        });
    }
  };
  // console.log(fromState);

  if (authState.isAuth === true) {
    navigate("/task");
  }
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img src={logo} alt="Logo" className="h-28 w-30 rounded-2xl" />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Log in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-900 ">
            Don&apos;t have an account?{" "}
            <Link
              to="/sign-up"
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Create a free account
            </Link>
          </p>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-800 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={fromState.email}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <a
                    href="#"
                    title=""
                    className="text-sm font-semibold text-black hover:underline"
                  >
                    {" "}
                    Forgot password?{" "}
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-800 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={fromState.password}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                  Get started <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            <button className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Log in with Google
            </button>
            <button className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-[#2563EB]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </span>
              Log in with Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

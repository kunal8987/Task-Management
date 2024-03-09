import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../utiles/AuthContextProvider";
const Dropdown = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  const { authState, logoutUser } = useContext(AuthContext);
  return (
    <div className="hidden space-x-2 lg:block">
      {authState.isAuth === true ? (
        <>
          {" "}
          <Link to={"/profile"}>
            <button className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Profile
            </button>
          </Link>
          <Link to={"/sign-in"}>
            <button
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={logoutUser}
            >
              Logout
            </button>
          </Link>{" "}
        </>
      ) : (
        <>
          {" "}
          <Link to={"sign-up"}>
            <button className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Sign Up
            </button>
          </Link>
          <Link to={"/sign-in"}>
            <button className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Log In
            </button>
          </Link>{" "}
        </>
      )}
    </div>
  );
};

export default Dropdown;

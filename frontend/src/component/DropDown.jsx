import React from "react";
import { Link } from "react-router-dom";
const Dropdown = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden space-x-2 lg:block">
      <Link to={"sign-up"}>
        <button
          type="button"
          className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Sign In
        </button>
      </Link>
      <Link to={"/sign-in"}>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Log In
        </button>
      </Link>
    </div>
  );
};

export default Dropdown;

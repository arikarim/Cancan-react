import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="bg-dark p-3 w-100">
      <ul>
      <Link className="mx-3 text-decoration-none link-light" to={"/"}>
          Home
        </Link>
        <Link className="mx-3 text-decoration-none link-light" to={"./createpost"}>
          Create Post
        </Link>
        <Link className="mx-3 text-decoration-none link-light" to={"./roles"}>
          My Posts
        </Link>
        <Link className="mx-3 text-decoration-none link-light" to={"./rejected"}>
        My rejected Posts
        </Link>
          <Link className="mx-3 text-decoration-none link-light" to={"./login"}>
            Login
          </Link>
      </ul>
    </div>
  );
};

export default Nav;

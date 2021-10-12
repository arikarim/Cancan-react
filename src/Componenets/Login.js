import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginF = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:3000/users/sign_in", {
        user: {
          email: email,
          password: password,
        },
      });
      localStorage.setItem("user", JSON.stringify(data.data.user.user));
      localStorage.setItem("roles", JSON.stringify(data.data.user.roles));
      localStorage.setItem("token", data.headers.authorization);
      console.log(data.data.user.user);
      console.log(data.data.user.roles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, []);
  return (
    <form  className="col-6 mx-auto my-5" onSubmit={(e) => loginF(e)}>
      <input
       className="col-6 form-control mx-auto"
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        name="email"
        placeholder="Email"
      />{" "}
      <br /> <br />
      <input
      className="col-6 form-control mx-auto"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="Password"
      />{" "}
      <br /> <br />
      <button className="col-6 btn btn-dark form-control mx-auto" type="submit">Login</button>
    </form>
  );
};

export default Login;

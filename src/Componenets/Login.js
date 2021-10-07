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
      localStorage.setItem("user", JSON.stringify(data.data.user));
      localStorage.setItem("token", data.headers.authorization);
      console.log(data.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, []);
  return (
    <form onSubmit={(e) => loginF(e)}>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        name="email"
        placeholder="Email"
      />{" "}
      <br /> <br />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="Password"
      />{" "}
      <br /> <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

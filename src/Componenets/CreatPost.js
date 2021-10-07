import axios from "axios";
import React, { useEffect } from "react";

const CreatPost = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "http://localhost:3000/posts",
        {
          post: {
            title: title,
            body: body,
            user_id: user.id,
          },
        },
        {
          header: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      console.log(data);
    } catch (err) {

      console.log(err);
    }
  };
  useEffect(() => {
    console.log(token);
  }, [user, token]);
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      />
      <br />
      <br />
      <textarea
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write your post here"
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatPost;

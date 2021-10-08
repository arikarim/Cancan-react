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
    <form className="mx-auto" onSubmit={(e) => handleSubmit(e)}>
      <div className="col-6 mx-auto my-4">
        <input
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
      </div>
      <div className="col-6 mx-auto my-4">
        <textarea
          className="w-100"
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your post here"
        />
      </div>
      <div  className="col-6 mx-auto my-4">
        <button className="mx-auto w-100 btn btn-dark" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreatPost;

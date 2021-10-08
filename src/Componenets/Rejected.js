import axios from "axios";
import React, { useEffect, useState } from "react";

const Rejected = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [decide, setDecide] = useState("");
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/rejected", {
          headers: {
            Authorization: token,
          },
        });
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  const handlePublish = async (e, titlee, bodyy) => {
    const id = Number(e.target.id);
    const decide = e.target.value;
    console.log(decide);
    try {
      const data = await axios.put(
        `http://localhost:3000/posts/${id}`,
        {
          post: {
            title: title || titlee,
            body: body || bodyy,
            user_id: user.id,
            status: decide,
          },
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div className="box" id={post.id} key={post.id}>
            <input
              type="text"
              defaultValue={post.title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />

            <textarea
              type="text"
              defaultValue={post.body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <br />
            <br />

            <div>
              <button
                value="sfr"
                id={post.id}
                onClick={(e) => handlePublish(e, post.title, post.body)}
              >
                Submit Again
              </button>
              <br />
              <br />

              <button
                value="discard"
                id={post.id}
                onClick={(e) => handlePublish(e, post.title, post.body)}
              >
                Discard the post
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Rejected;
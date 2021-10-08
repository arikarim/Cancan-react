import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts", {
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
  return (
    <div className="d-flex">
      {posts &&
        posts.map((post) => (
          <div className="box col-12 col-md-4" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;

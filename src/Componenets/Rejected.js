import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Rejected = () => {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const {id} = useParams()
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`, {
          headers: {
            Authorization: token,
          },
        });
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [id]);

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
      setPost([]);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex flex-wrap">
      {post.title && ( 
          <div className="my-3 mx-2 d-flex flex-column" id={post.id} key={post.id}>
            <input
            className="form-control my-3"
              type="text"
              defaultValue={post.title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
            className="form-control my-3"
              type="text"
              defaultValue={post.body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <div className="d-flex flex-column">
              <button
              className="btn btn-dark my2"
                value="send_for_review"
                id={post.id}
                onClick={(e) => handlePublish(e, post.title, post.body)}
              >
                Submit for Review
              </button>
              <button
              className="btn btn-danger my-2"
                value="discard"
                id={post.id}
                onClick={(e) => handlePublish(e, post.title, post.body)}
              >
                Discard the post
              </button>
            </div>
          </div>
      )}
      </div>
  );
};

export default Rejected;

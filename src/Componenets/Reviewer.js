import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Reviewer = () => {
  const [post, setPost] = useState([]);
  const token = localStorage.getItem("token");
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

  const handlePublish = async (e) => {
    const id = Number(e.target.id);
    const decide = e.target.value;
    console.log(decide);
    try {
      const data = await axios.put(`http://localhost:3000/posts/${id}`, {
        post: {
          status: decide,
        },
      },
      {
        headers: {
          Authorization: token,
        },
      }
      );
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex flex-wrap gap-2">
      {post.title &&  (
          <div className="col-12 col-md-4" id={post.id} key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <div className="d-flex flex-column">
              <button
                className="btn btn-warning my-2"
                value="send_for_question"
                id={post.id}
                onClick={(e) => handlePublish(e)}
              >
                Send for change
              </button>
              <button
              className="btn btn-success my-2"
                value="send_for_audit"
                id={post.id}
                onClick={(e) => handlePublish(e)}
              >
                Send to auditor
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default Reviewer;

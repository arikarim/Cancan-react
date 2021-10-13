import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Auditor from "./Auditor";
import Rejected from "./Rejected";
import Reviewer from "./Reviewer";

const RolePosts = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");

  const roles = JSON.parse(localStorage.getItem("roles"));
  var userRole = 'rejected'
  useEffect(() => {
    var end = "posts";
    if (roles.includes("reviewer")) {
      end = "adminposts";
      userRole = 'reviewer'
    } else if (roles.includes("auditor")) {
      userRole = 'auditor'
      end = "auditposts";
    } else {
      end = "rejected";
      userRole = 'rejected'
    }
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${end}`, {
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
    <div>
      {posts &&
        posts.map((post) => (
          <div className="bg-light m-2 col-12 col-md-4" key={post.id}>
            <Link to={`/${userRole}/${post.id}`}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </Link>
          </div>
        ))}
      {/* {roles &&  roles.includes('reviewer') && <Reviewer />}
      {roles &&  roles.includes('auditor') && <Auditor />}
      {roles &&  !roles.includes('auditor') && !roles.includes('reviewer') && <Rejected />}  */}
    </div>
  );
};

export default RolePosts;

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
  if (roles.includes("reviewer")) {
    userRole = 'reviewer'
    console.log(userRole)
  } else if (roles.includes("auditor")) {
    userRole = 'auditor'
  } else {
    userRole = 'rejected'
  }
  useEffect(() => {
    var end = "posts";
    if (roles.includes("reviewer")) {
      end = "adminposts";
      userRole = 'reviewer'
      console.log(userRole)
    } else if (roles.includes("auditor")) {
      userRole = 'auditor'
      end = "auditor";
    } else {
      end = "rejected";
      userRole = 'rejected'
    }
    console.log(end)
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
  }, [userRole]);

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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RolePosts = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token");

  const roles = JSON.parse(localStorage.getItem("roles"));
  var userRole = "rejected";
  if (roles.includes("reviewer")) {
    userRole = "reviewer";
    console.log(userRole);
  } else if (roles.includes("auditor")) {
    userRole = "auditor";
  } else {
    userRole = "rejected";
  }
  useEffect(() => {
    var end = "posts";
    if (roles.includes("reviewer")) {
      end = "admin_posts";
      userRole = "reviewer";
      console.log(userRole);
    } else if (roles.includes("auditor")) {
      userRole = "auditor";
      end = "auditor";
    } else {
      end = "rejected";
      userRole = "rejected";
    }
    console.log(end);
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
      <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
      {posts &&
        posts.map((post) => (
          // create a table
            <tbody key={post.id}>
              <tr>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{post.status}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/${userRole}/${post.id}`,
                      state: {
                        post: post,
                      },
                    }}
                  >
                    <button className="btn btn-primary">View</button>
                  </Link>
                </td>
              </tr>
            </tbody>
        ))}
      </table>
  );
};

export default RolePosts;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const { id } = useParams(); // Get the user ID from the route parameter
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data); // Update state with user data
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">Details of User ID: {id}</div>
            <div className="card-body">
              <p className="card-text">
                <b>Name:</b> {user.name}
              </p>
              <p className="card-text">
                <b>Username:</b> {user.username}
              </p>
              <p className="card-text">
                <b>Email:</b> {user.email}
              </p>
              <Link className="btn btn-primary" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

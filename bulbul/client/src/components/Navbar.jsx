import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";


const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
       
        <div className="links">
        
          <Link className="user" to="/">
              <span><b> {currentUser?.username}</b></span> 
          </Link>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;

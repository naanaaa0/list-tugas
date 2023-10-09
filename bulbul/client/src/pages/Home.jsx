import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Todo from '../components/Todo';
import { AuthContext } from "../context/authContext";
import { useContext } from "react";






const Home = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="home">
      <div className="posts">
      {currentUser ? (
           <Todo />
          ) : (
            <div className='arah'>
            <span>login terlebih dahulu</span>
            <Link className="link" to="/login">
              Login
            </Link>
            </div>
          )}
      </div>
    </div>
  )
}

export default Home

/* import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ setIsOpen }) {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsLogin(!!localStorage.getItem("token"));
  }, []);

  const checkLogin = () => {
    if (isLogin) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogin(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <header>
      <h2>Food Blog</h2>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/myRecipe">My Recipe</NavLink></li>
        <li><NavLink to="/favRecipe">Favourites</NavLink></li>
        <li onClick={checkLogin}>
          <p className="login">{isLogin ? "Logout" : "Login"}</p>
        </li>
      </ul>
    </header>
  );
}
 */

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ setIsOpen }) {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLogin(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const checkLogin = () => {
    if (isLogin) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogin(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <header>
      <h2>Food Blog</h2>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/myRecipe">My Recipe</NavLink></li>
        <li><NavLink to="/favRecipe">Favourites</NavLink></li>
        <li onClick={checkLogin}>
          <p className="login">{isLogin ? "Logout" : "Login"}</p>
        </li>
      </ul>
    </header>
  );
}

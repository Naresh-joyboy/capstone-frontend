import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages/pag.css";

const Navbar = (view) => {
  const navigate = useNavigate();
  const login = window.localStorage.getItem("isLogedIn");
  // useEffect(()=>{
  //     navigate('/')
  // },[Logout])
  const Login = () => {
    navigate("/home");
    window.location.reload();
  };

  const Logout = () => {
    window.localStorage.removeItem("isLogedIn");
    window.localStorage.removeItem("loginSuccess");
    navigate("/home");
    window.location.reload();
  };

  return (
   
    <div>
    
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        <h2 style={{ paddingLeft: "25px", color: "blue" }}> YUVI Portal</h2>

        <ul className="navbar-nav ml-auto">
          <li className="nav-li1">
            <Link to={"/"}>Home</Link>
          </li>

          <li className="nav-li1">
            <Link to={"/query"}>Query</Link>
          </li>

          <li className="nav-li2">
            <Link to={"/recquery"}>Add Query</Link>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>
          {login ? (
            <button
              style={{
                padding: "5px",
                paddingTop: "5px",
                backgroundColor: "white",
                border: "none",
                transition: "all",
              }}
              onClick={() => Logout()}
            >
              Logout
            </button>
          ) : (
            <button
              style={{
                padding: "5px",
                paddingTop: "5px",
                backgroundColor: "white",
                border: "none",
                transition: "all",
              }}
              onClick={() => Login()}
            >
              LogIn
            </button>
          )}
        </ul>
      </nav>
    
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import Login from "../../components/auth/Login";
import Nav from "../../components/Navbar/Nav";
import "./homepage.css";
const Home = () => {
  const [auth, setAuth] = useState(false);
  return (
    <>
      <Nav />
      <div className="Home">
        <div className="homepage">
          <h1 className="text-white">Start something epic.</h1>
          <br />
          <button
            className="primary_button"
            onClick={() => {
              setAuth(!auth);
            }}
          >
            Create Account
          </button>
        </div>
      </div>
      {auth && <Login open={auth} setAuth={setAuth} />}
    </>
  );
};

export default Home;

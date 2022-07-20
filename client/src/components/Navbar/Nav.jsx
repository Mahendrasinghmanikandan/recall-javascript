import React, { useState } from "react";
import "./nav.css";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import Login from "../auth/Login";
const Nav = ({ minimal = false, authUser = false }) => {
  const [authOpen, setAuthOpen] = useState(false);
  return (
    <>
      <div className="Navbar">
        <h1>
          <img
            src={!minimal ? "./images/dark.png" : "./images/light.png"}
            alt=""
            className="logo"
          />
        </h1>
        <div className="Navbar_container">
          <div className="Navbar_right">
            {!minimal && (
              <>
                <h3 className="Nav_items sans-serif">Products</h3>
                <h3 className="Nav_items sans-serif">Learn</h3>
                <h3 className="Nav_items sans-serif">Safety</h3>
                <h3 className="Nav_items sans-serif">Support</h3>
                <h3 className="Nav_items sans-serif">Download</h3>
              </>
            )}
          </div>
          <div className="Navbar_left">
            <span className="Nav_1">
              <PublicOutlinedIcon
                className={!minimal ? "Navbar_icon" : "text-gray Navbar_icon"}
              />
              <h3
                className={
                  !minimal ? "text-white sans-serif" : "text-gray sans-serif"
                }
              >
                English(UK)
              </h3>
            </span>
            {!authUser && (
              <button
                className="secondary_button"
                onClick={() => {
                  setAuthOpen(!authOpen);
                }}
              >
                Log in
              </button>
            )}
          </div>
        </div>
      </div>
      {authOpen && <Login open={authOpen} setAuth={setAuthOpen} />}
    </>
  );
};

export default Nav;

import React, { useState, useEffect } from "react";
import { BsFillHouseFill, BsFillHeartFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import { UseStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Navbar() {
  const [{ wishlist, user }, dispatch] = UseStateValue();
  // console.log(wishlist);
  // console.log(user);

  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  const [button, setButton] = useState(true);
  function closeMobileMenu() {
    setClick(false);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log("yoo", authUser);
        dispatch({
          type: "UPDATE_USER",
          item: authUser,
        });
      } else {
        dispatch({
          type: "UPDATE_USER",
          item: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  function showButton() {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }
  window.addEventListener("resize", showButton);
  // console.log("new", user?.displayName);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="__navbar">
          <div className="__navbar-container __container">
            <Link to="/" className="__navbar-logo">
              <BsFillHouseFill className="__navbar-icon" />
              ASHIYANA
            </Link>

            <div className="__menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "__nav-menu active" : "__nav-menu"}>
              <li className="__nav-item">
                <Link
                  to="/properties"
                  className="__nav-links"
                  onClick={closeMobileMenu}
                >
                  Properties
                </Link>
              </li>

              <li className="__nav-btn">
                {button ? (
                  user ? (
                    "none"
                  ) : (
                    <Link
                      to="/login"
                      className="__btn-link"
                      onClick={closeMobileMenu}
                    >
                      <Button buttonStyle="__btn--outline" children="SIGN IN" />
                    </Link>
                  )
                ) : user ? (
                  "none"
                ) : (
                  <Link
                    to="/login"
                    className="__btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button
                      buttonStyle="__btn--outline"
                      buttonSize="__btn--mobile"
                      children="SIGN IN"
                    />
                  </Link>
                )}
              </li>
              <li className="__nav-btn">
                {button ? (
                  user ? (
                    <button
                      className="signOut__button"
                      onClick={(e) => {
                        auth.signOut();
                        dispatch({ type: "CLEAR_WISHLIST", item: [] });
                      }}
                    >
                      sign out
                    </button>
                  ) : (
                    <Link
                      to="/sign-up"
                      className="__btn-link"
                      onClick={closeMobileMenu}
                    >
                      <Button buttonStyle="__btn--outline" children="SIGN UP" />
                    </Link>
                  )
                ) : user ? (
                  <button
                    className="signOut__button"
                    onClick={(e) => {
                      auth.signOut();
                      dispatch({ type: "CLEAR_WISHLIST", item: [] });
                    }}
                  >
                    sign Out
                  </button>
                ) : (
                  <Link
                    to="/sign-up"
                    className="__btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button
                      buttonStyle="__btn--outline"
                      buttonSize="__btn--mobile"
                      children="SIGN UP"
                    />
                  </Link>
                )}
              </li>
              <Link to="/wishlist">
                <li className="__nav-wishlistIcon">
                  <BsFillHeartFill
                    style={
                      wishlist?.length > 0
                        ? { fontSize: "2rem", margin: "0 5px", color: "red" }
                        : { fontSize: "2rem", margin: "0 5px", color: "white" }
                    }
                  />
                  <span style={{ color: "white" }}>{wishlist?.length}</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

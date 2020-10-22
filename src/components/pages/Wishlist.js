import React, { useState } from "react";
import { UseStateValue } from "../StateProvider";
import "../PropertiesInCity.css";
import Navbar from "../Navbar";

function Wishlist() {
  const [{ wishlist }, dispatch] = UseStateValue();
  const removeFromWishlist = (removeItem) => {
    // const temp = wishlist.filter((wish) => wish.id != removeItem);
    // // console.log("Yoo", temp);
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id: removeItem,
    });
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {wishlist.map((w) => {
          return (
            <div className="insideCity">
              <div className="insideCity__row1">
                <img src={w.img} alt="property" />
                <div className="details">
                  <h2>
                    {w.type}{" "}
                    <small style={{ color: "grey", fontSize: "1.4rem" }}>
                      {w.locality}
                    </small>{" "}
                  </h2>
                  <div className="details__components">
                    <small style={{ fontSize: "1.4rem" }}>₹</small>
                    <strong>{w.price}</strong>{" "}
                    <small style={{ color: "grey", fontSize: "1.4rem" }}>
                      lacs
                    </small>
                    <strong>{w.area}</strong>
                    <small>sq.ft</small>
                    <strong>{w.bhk}</strong>
                  </div>
                  <h2>{w.describedLocality}</h2>
                </div>
              </div>
              <div className="insideCity__row2">
                <div className="details__row2__left">
                  <p>Posted on {w.date} by</p>
                  <h1>
                    {w.owner}
                    {w.builder}
                  </h1>
                </div>

                <div className="details__row2__right">
                  {/* <button onClick={addToWishlist} className="details__button">
              <BsFillHeartFill />
            </button> */}
                  <button
                    className="details__button"
                    onClick={() => {
                      removeFromWishlist(w.id);
                    }}
                  >
                    Remove
                  </button>
                  <a href={w.mail}>
                    <button className="details__button">Contact</button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Wishlist;

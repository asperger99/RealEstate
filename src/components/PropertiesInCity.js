import React, { useState } from "react";
import { BsFillHeartFill, BsPersonPlus } from "react-icons/bs";
import "./PropertiesInCity.css";
import { UseStateValue } from "./StateProvider";

function PropertiesInCity(props) {
  const [{ user }, dispatch] = UseStateValue();
  const [disable, setDisable] = useState(false);
  const addToWishlist = () => {
    if (user) {
      console.log(user);
      setDisable(true);
      dispatch({
        type: "ADD_TO_WISHLIST",
        item: {
          id: props.id,
          img: props.img,
          type: props.type,
          locality: props.locality,
          price: props.price,
          area: props.area,
          bhk: props.bhk,
          date: props.date,
          mail: props.mail,
          owner: props.owner,
          builder: props.builder,
          buyOrRent: props.buyOrRent,
        },
      });
    } else {
      alert("please SIGN IN first!!");
    }
  };

  return (
    <>
      <div className="insideCity">
        <div className="insideCity__row1">
          <img src={props.img} alt="property" />
          <div className="details">
            <h2>
              {props.type}
              <small style={{ color: "grey", fontSize: "1.4rem" }}>
                near {props.locality}
              </small>{" "}
            </h2>

            <div className="details__components">
              <small style={{ fontSize: "1.4rem", padding: "5px" }}>₹</small>
              <strong>{props.price}</strong>
              <strong style={{ color: "lightgrey", fontSize: "2rem" }}>
                {" | "}
              </strong>
              <strong>{props.area}</strong>
              <strong style={{ color: "lightgrey", fontSize: "2rem" }}>
                {" | "}
              </strong>
              <strong>for {props.buyOrRent}</strong>
              <strong style={{ color: "lightgrey", fontSize: "2rem" }}>
                {" | "}
              </strong>

              {props.bhk && <strong>{props.bhk} BHK </strong>}
            </div>
          </div>
        </div>
        <div className="insideCity__row2">
          <div className="details__row2__left">
            <p>Posted on {props.date} by</p>
            <h1>{props.owner}</h1>
          </div>

          <div className="details__row2__right">
            <button
              className={disable ? "details__buttonDisable" : "details__button"}
              disabled={disable}
              onClick={addToWishlist}
            >
              <BsFillHeartFill />
            </button>
            <a href={props.mail}>
              <button className="details__button">Contact</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertiesInCity;

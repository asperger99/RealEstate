import React, { useState } from "react";
import { db, storage } from "./firebase";
import "./PostProperty.css";
import { UseStateValue } from "./StateProvider";
import firebase from "firebase";
import { cityNames } from "./Data";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

function PostProperty() {
  const [{ user }, dispatch] = UseStateValue();
  const [city, setCity] = useState("select city");
  const [locality, setLocality] = useState("");
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [BHK, setBHK] = useState(null);
  const [image, setImage] = useState(null);
  const [buyOrRent, setBuyOrRent] = useState("");
  const [mail, setMail] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image?.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //error function
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image?.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("postedProperty")
              .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                city: city,
                img: url,
                type: type,
                locality: locality,
                price: price,
                area: area,

                mail: mail,
                owner: user?.displayName,
                buyOrRent: buyOrRent,
                bhk: BHK,
                date: date,
              })
              .catch((error) => console.log(error.message));
            setImage(null);
            setLocality("");
            setMail("");
            setPrice("");
            setType("");
            setCity("select city");
            setBHK(null);
            setBuyOrRent("");
            setArea("");
            setProgress(0);
          });
      }
    );
  };

  return (
    <div className={"postProperty"}>
      <h1>Post Your Properties</h1>
      <div className="postProperty__details">
        <progress value={progress} max="100" />
        <div className="select__city">
          <FormControl variant="outlined">
            <Select
              className="selectCity"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <MenuItem
                className="selectCity__menu"
                disabled
                value="select city"
              >
                Select City
              </MenuItem>
              {cityNames.map((city) => (
                <MenuItem className="selectCity__menu" value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <input
          value={locality}
          type="text"
          onChange={(e) => setLocality(e.target.value)}
          placeholder="Locality"
        />
        <input
          value={type}
          type="text"
          onChange={(e) => setType(e.target.value)}
          placeholder="Type of property(eg. flat,residence,plot)"
        />
        <input
          value={area}
          type="text"
          onChange={(e) => setArea(e.target.value)}
          placeholder="Area of property( with unit )"
        />
        <input
          value={price}
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <input
          value={buyOrRent}
          type="text"
          onChange={(e) => setBuyOrRent(e.target.value)}
          placeholder="for buy or rent?"
        />
        <input
          value={BHK}
          type="number"
          onChange={(e) => setBHK(e.target.value)}
          placeholder="BHK(in case of flats)"
        />
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          placeholder="today's date"
        />
        <input
          value={mail}
          type="email"
          onChange={(e) => setMail(e.target.value)}
          placeholder="Email for contact"
        />
        <input type="file" onChange={handleChange} className="input__file" />

        <div className="postProperty__button">
          {user ? (
            <button onClick={handleUpload}>Post</button>
          ) : (
            <h1>Please SIGN IN to Post Properties!!</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostProperty;

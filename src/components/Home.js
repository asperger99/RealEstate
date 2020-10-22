import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaSearch, FaRupeeSign } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import Citypropertie from "./Cityproperties";
import Button from "./Button";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PostProperty from "./PostProperty";

function Home() {
  const [buyOrRent, setBuyOrRent] = useState("buy");

  return (
    <>
      <Navbar />
      <div className="home__searchbar">
        <div className="searchbar__wrapper">
          <button
            className={
              buyOrRent === "buy" ? "buyorrent buyorrent--active" : "buyorrent"
            }
            onClick={() => setBuyOrRent("buy")}
          >
            Buy
          </button>
          <button
            className={
              buyOrRent === "rent" ? "buyorrent buyorrent--active" : "buyorrent"
            }
            onClick={() => setBuyOrRent("rent")}
          >
            Rent
          </button>
        </div>
        <div className="searchbar__wrapper">
          <input
            className="input__box"
            type="text"
            placeholder="search by location"
          ></input>
          <FaSearch className="search__icon" />
        </div>
      </div>

      <div className="working__of__realestae">
        <div className="working__heading">
          <h1>How it Works</h1>
        </div>

        <div className="working__flexbox">
          <div className="working__flex__elements">
            <AiFillHome className="working__icon" />
            <h3>Buy a property</h3>
            <p>
              texto modelo da indústria tipográfica e de impressão. O Lorem
              Ipsum tem vindo a ser o texto padrão usado por estas indústrias
              desde{" "}
            </p>
          </div>

          <div className="working__flex__elements">
            <FaRupeeSign className="working__icon" />
            <h3>Sell a property</h3>
            <p>
              para criar um espécime de livro. Este texto não só sobreviveu 5
              séculos, mas também o salto para a tipografia electrónica,
              mantendo
            </p>
          </div>
          <div className="working__flex__elements">
            <BsGraphUp className="working__icon" />
            <h3>Investing</h3>
            <p>
              essencialmente inalterada. Foi popularizada nos anos 60 com a
              disponibilização das folhas de Letraset, que continham passagens
            </p>
          </div>
        </div>
      </div>

      <div className="properties__title">
        <h1>Properties</h1>
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="myelements">
              <Citypropertie
                img="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib:rb-1.2.1&ixid:eyJhcHBfaWQiOjEyMDd9&auto:format&fit:crop&w:500&q:60"
                cityname="Mumbai"
                propertiesForSale="27534"
                propertiesForRent="20153"
                flats="9390"
                residence="8006"
                houseVillas="2312"
              />
              <div className="second">
                <Citypropertie
                  img="https://images.unsplash.com/photo-1582196172129-c49c4f3e329c?ixlib:rb-1.2.1&ixid:eyJhcHBfaWQiOjEyMDd9&auto:format&fit:crop&w:500&q:60"
                  cityname="Bengaluru"
                  propertiesForSale="27534"
                  propertiesForRent="20153"
                  flats="9390"
                  residence="8006"
                  houseVillas="2312"
                />
              </div>
              <div className="second">
                <Citypropertie
                  img="https://images.unsplash.com/photo-1536105933405-130f959d5df5?ixlib:rb-1.2.1&ixid:eyJhcHBfaWQiOjEyMDd9&auto:format&fit:crop&w:500&q:60"
                  cityname="Ranchi"
                  propertiesForSale="27534"
                  propertiesForRent="20153"
                  flats="9390"
                  residence="8006"
                  houseVillas="2312"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="myelements">
              <Citypropertie
                img="https://images.unsplash.com/photo-1592639296346-560c37a0f711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                cityname="Delhi"
                propertiesForSale="27534"
                propertiesForRent="20153"
                flats="9390"
                residence="8006"
                houseVillas="2312"
              />
              <div className="second">
                <Citypropertie
                  img="https://images.unsplash.com/photo-1542709618-9fa4290f0cfc?ixlib:rb-1.2.1&ixid:eyJhcHBfaWQiOjEyMDd9&auto:format&fit:crop&w:500&q:60"
                  cityname="Kolkata"
                  propertiesForSale="27534"
                  propertiesForRent="20153"
                  flats="9390"
                  residence="8006"
                  houseVillas="2312"
                />
              </div>
              <div className="second">
                <Citypropertie
                  img="https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?ixlib:rb-1.2.1&ixid:eyJhcHBfaWQiOjEyMDd9&auto:format&fit:crop&w:500&q:60"
                  cityname="Banaras"
                  propertiesForSale="27534"
                  propertiesForRent="20153"
                  flats="9390"
                  residence="8006"
                  houseVillas="2312"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="myelements">
              <Citypropertie
                img="https://images.unsplash.com/photo-1576055532329-b9ff74e1412a?ixlib:rb-1.2.1&ixid:eyJhcHBfaWQiOjEyMDd9&auto:format&fit:crop&w:500&q:60"
                cityname="Rishikesh"
                propertiesForSale="27534"
                propertiesForRent="20153"
                flats="9390"
                residence="8006"
                houseVillas="2312"
              />
              <div className="second">
                <Citypropertie
                  img="https://images.unsplash.com/photo-1561400930-ab18eb910ee5?ixlib:rb-1.2.1&ixid:eyJhcHBfaWQiOjEyMDd9&auto:format&fit:crop&w:967&q:80"
                  cityname="Patna"
                  propertiesForSale="27534"
                  propertiesForRent="20153"
                  flats="9390"
                  residence="8006"
                  houseVillas="2312"
                />
              </div>
              <div className="second">
                <Citypropertie
                  img="https://images.unsplash.com/photo-1588324141464-455123129dcc?ixlib:rb-1.2.1&ixid:eyJhcHBfaWQiOjEyMDd9&auto:format&fit:crop&w:500&q:60"
                  cityname="Pune"
                  propertiesForSale="27534"
                  propertiesForRent="20153"
                  flats="9390"
                  residence="8006"
                  houseVillas="2312"
                />
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="properties__bottom__button">
        <Link to="/properties">
          <Button buttonStyle="__btn--outline" children="Explore All Cities" />
        </Link>
      </div>
      <div className="postProperty">
        <PostProperty />
      </div>

      <Footer />
    </>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropertiesInCity from "../PropertiesInCity";
// import { cityProperties } from "../Data";
import Navbar from "../Navbar";
import { db } from "../firebase";

function CityPropertiesPage() {
  const initialValue = [
    {
      id: 0,
      post: {
        buyOrRent: "buy",
        city: "Delhi",
        img:
          "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        type: "plot",
        locality: "near hgdhgdhjg fhgdfg fdhgdgdjjdfd fbd",
        price: "10 lacs",
        area: "9345",
        date: "12/08/17",
        mail: "property@gmail.com",
        owner: "pankaj",
      },
    },
    {
      id: 1,
      post: {
        buyOrRent: "buy",
        city: "Delhi",
        img:
          "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        type: "flat",
        locality: "near shfdhfg fdgdfhg fdhgfhdg",
        price: "15 lacs",
        area: "1200",
        bhk: "2",
        date: "21/09/19",
        mail: "property@gmail.com",

        owner: "vishwa groups",
      },
    },
    {
      id: 2,
      post: {
        buyOrRent: "rent",
        city: "Delhi",
        img:
          "https://images.unsplash.com/photo-1524177536702-14df4a2a0a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        type: "plot",
        locality: "near hgdhgdhjg fhgdfg fdhgdgdjjdfd fbd",
        price: "18 thousands/month",
        area: "3678",
        date: "12/08/17",
        mail: "property@gmail.com",
        owner: "Ashish",
      },
    },
    {
      id: 3,
      post: {
        buyOrRent: "buy",
        city: "Delhi",
        img:
          "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        type: "flat",
        locality: "near shfdhfg fdgdfhg fdhgfhdg",
        price: "28 lacs",
        area: "2200",
        bhk: "3",
        date: "21/09/19",
        mail: "property@gmail.com",

        owner: "malhotra constructions",
      },
    },
    {
      id: 4,
      post: {
        buyOrRent: "buy",
        city: "Delhi",
        img:
          "https://images.unsplash.com/photo-1588985719185-4b612a405cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        type: "plot",
        locality: "near hgdhgdhjg fhgdfg fdhgdgdjjdfd fbd",
        price: "22 lacs",
        area: "12345",

        date: "12/08/17",
        mail: "property@gmail.com",
        owner: "Emiway",
      },
    },
    {
      id: 5,
      post: {
        buyOrRent: "rent",
        city: "Delhi",
        img:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

        type: "flat",
        locality: "near shfdhfg fdgdfhg fdhgfhdg",
        price: "25 thousands/month",
        area: "1600",
        bhk: "1",
        date: "21/09/19",
        mail: "property@gmail.com",

        owner: "raj constructions",
      },
    },
  ];
  let { cityname } = useParams();
  const [firebaseCityProperties, setFirebaseCityProperties] = useState([]);
  useEffect(() => {
    db.collection("postedProperty")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // setFirebaseCityProperties(
        //   snapshot.docs.map((doc) => ({
        //     id: doc.id,
        //     post: doc.data(),
        //   }))
        // );
        let dbData = snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }));
        setFirebaseCityProperties([...dbData, ...initialValue]);
      });
  }, []);

  let temp = firebaseCityProperties.filter(
    (x) => x.post?.city.toLowerCase() === cityname.toLowerCase()
  );

  // console.log(firebaseCityProperties);
  // console.log(cityname);
  // console.log("temp", temp);
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        Properties in <strong> {cityname}</strong>
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {temp?.map(({ id, post }) => {
          return (
            <PropertiesInCity
              key={id}
              postId={id}
              img={post.img}
              type={post.type}
              locality={post.locality}
              price={post.price}
              area={post.area}
              bhk={post.bhk}
              date={post.date}
              mail={post.mail}
              owner={post.owner}
              buyOrRent={post.buyOrRent}
            />
          );
        })}
      </div>
    </>
  );
}

export default CityPropertiesPage;

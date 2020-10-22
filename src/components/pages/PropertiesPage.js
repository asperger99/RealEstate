import React from 'react'
import Cityproperties from '../Cityproperties'
import Navbar from '../Navbar'
import {cities} from "../Data"


function PropertiesPage() {

    


    return (
        <>
          <Navbar />
          <h1 style={{textAlign:"center",margin:"4% 0"}}>Explore the Residential/Commercial Properties in India by cities</h1>
          <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",marginBottom:"50px"}}>
          {cities.map(city => {

            return <Cityproperties 
            //   img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGQvqLCtULhyc08u78cE2bQMD1n1BFhCVJaA&usqp=CAU"
              img={city.img}
              cityname={city.cityName}
              propertiesForSale={city.sale}
              propertiesForRent={city.rent}
              flats={city.flats}
              residence={city.residence}
              houseVillas={city.houseVilla}
          /> 
          })}
          
          
          </div>
        </>
    )
}

export default PropertiesPage

import React from 'react'
import "./Cityproperties.css"
import {Link} from "react-router-dom"

function Cityproperties(props) {
    return (
        <>
        {/* <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-evenly"}}className="Cityproperties__row"> */}
        <div className="properties__box">
            <img src={props.img} alt={props.cityname} />
                <div className="properties__details">
                    <h1>{props.cityname} Properties</h1>
                    <div className="properties__rowOne">
                    <p>{props.propertiesForSale}+ Properties for Sale</p>
                    <p>{props.propertiesForRent}+ Properties for Rent</p>
               
                    </div>
                    <div className="properties__rowOne">
                    <p>{props.flats} Flats | {props.residence} Residential Plots |</p>
                    <p>{props.houseVillas} House & Villas</p>
                
                    </div>
                {/* </div>
                <div className="properties__details"> */}
               </div>
               <Link to={`/properties/${props.cityname}`} className="properties__link">
               <button className="properties__button">Explore More</button>
               </Link>
                
            {/* </div> */}
            
        </div>
            
        </>
    )
}

export default Cityproperties

import React from 'react'

function Properties() {
    return (
        <>
            <div className="properties__box">
            <img src={"https://source.unsplash.com/1600x900/?"+props.img} alt="house" />
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
               <Link className="properties__link">
               <button className="properties__button">Explore More</button>
               </Link>
                
            {/* </div> */}
            
        </div>
        </>
    )
}

export default Properties

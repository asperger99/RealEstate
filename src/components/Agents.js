import React from 'react'
import Button from "./Button"
import "./Agents.css"

function Agents(props) {
    return (
        <>
           <div className="agent__box">
               <img src="https://logoipsum.com/logo/logo-4.svg" alt="agent" className="agent__img" />
               <div className="agent__details">
                   <h1>{props.name}</h1>
                   <p>{props.address}</p>
               </div>
               <div className="agent__properties__details">
                   <p>{props.sale} Properties for Sale | {props.rent} Properties for Rent</p>
                   <h6>Operating localities:</h6>
                   <p>{props.activeArea}</p>
               </div>
               <div className="agent__contact">
                   <a
                       href="mailto:xyz@gmail.com"
                   > Send Email</a>
               </div>
           </div> 
        </>
    )
}

export default Agents

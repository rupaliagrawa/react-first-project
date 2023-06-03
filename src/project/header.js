import React from "react";
import { Link } from "react-router-dom";
import "./project.css"
//import Fitness from "./fitness";



const Header =()=>{
    return(
        <>
        <div className="inlinea">
        <h1 className="the-siren">THE</h1> 
       <h1 className="siran">Siren</h1> 
       </div>
        <div className="inline">
            
            <Link to="/" className="headhome">Home</Link><br />
            <Link to="/fitness" className="headhome">Fitness</Link><br/>
            <Link to="/tourism" className="headhome">Tourism</Link><br/>
            <Link to="/technology" className="headhome">Technology</Link><br/>
            <Link to="/bollywood" className="headhome">Bollywood</Link>


        </div>
        <hr />
        
        </>
    )
}
export default Header;
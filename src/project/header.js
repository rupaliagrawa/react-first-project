import React, { useState }  from "react";

import { Link } from "react-router-dom";
import "./project.css";
import { FiX } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
//import Fitness from "./fitness";



const Header =()=>{
   
    const [Mobile , setMobile] =useState(false)
    
    return(
        <>
        <div className="inlinea">
        <h1 className="the-siren">THE</h1> 
       <h1 className="siran">Siren</h1> 
       </div>
       <div className=  "toggle-btn" >
         
      
          <button className="mobile-menu-icon" onClick={()=>setMobile(!Mobile)}>{Mobile ? <FiX/> :<FaBars />}</button>  
            
        
         
        </div>
        <div className= {Mobile?"nav-links-mobile":"inline" } onClick={()=>setMobile(false)}>
            
            <Link to="/" className="headhome">Home</Link><br />
            <Link to="/fitness" className="headhome">Fitness</Link><br/>
            <Link to="/tourism" className="headhome">Tourism</Link><br/>
            <Link to="/technology" className="headhome">Technology</Link><br/>
            <Link to="/bollywood" className="headhome">Bollywood</Link>


        
        </div>

        <hr id="h-r" />
        
        </>
    )
}
export default Header;
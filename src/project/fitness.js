
import React from "react";
import {Link} from "react-router-dom";
import "./project.css";
const Fitness =(props)=>{
    console.log(props);
    return(
        <>
        <h1 className="main-heading">Fitness</h1> 
        <div className="new">
            
             {props.courseList.map(item=>(
                
                <div className="fitContainer">
               
                <div className="techdiv1"><img src={item.img}  className="img1"/>
                
              
                <Link to="fit-ele-1-"> <h3 className="fitness-heading">{item.headingF}</h3></Link>
                <Link to="fit-ele-2"> <h3 className="fitness-heading">{item.heading1}</h3></Link>
                <Link to="fit-ele-3"> <h3 className="fitness-heading">{item.heading2}</h3></Link>
                <Link to="fit-ele-4"> <h3 className="fitness-heading">{item.heading3}</h3></Link>
                <Link to="fit-ele-5"> <h3 className="fitness-heading">{item.heading4}</h3></Link>
                <Link to="fit-ele-6"> <h3 className="fitness-heading">{item.heading5}</h3></Link>
                </div>
                
                </div>
         
          
        ))}
        </div>

       </>
     
        
    )


    
    
}
export default Fitness;
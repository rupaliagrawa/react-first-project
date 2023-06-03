import React from "react";
import {Link} from "react-router-dom";
import  "./tech.css";

const Tourism =(props)=>{
    console.log(props);
    return(
        <>
        <h1 className="tech-heading">Tourism</h1>
        <hr />
        

    <div className="div-flex">
    <div className="container">

        {props.tourList.map(item=>(
        
       
      
          <div className="tech-div">
          
            <img src={item.img} className="tech-img" />

             <Link to="tour-ele-1"> <h2 className="text-doc">{item.heading1}</h2></Link>
             <Link to="tour-ele-2"> <h2 className="text-doc">{item.heading2}</h2></Link>
             <Link to="tour-ele-3"> <h2 className="text-doc">{item.heading3}</h2></Link>
             <Link to="tour-ele-4"> <h2 className="text-doc">{item.heading4}</h2></Link>
             <Link to="tour-ele-5"> <h2 className="text-doc">{item.heading5}</h2></Link>
             <Link to="tour-ele-6"> <h2 className="text-doc">{item.heading6}</h2></Link>
           
           
          </div>
        
         
        
        

        
        ))}
          </div>
          
      <div>
      <div className="tech-div-side">
          <h1 className="latest-heading">Top Post</h1>
          {props.tourList.map(item=>(
            <div>
            <div className="top-posts">
              <img src={item.img} className="latest-one"/>
              
              <h1 className="top-post-head">{item.heading}</h1>
              <Link to="tour-ele-1"> <h2 className="top-post-head">{item.heading1}</h2></Link>
             <Link to="tour-ele-2"> <h2 className="top-post-head">{item.heading2}</h2></Link>
             <Link to="tour-ele-3"> <h2 className="top-post-head">{item.heading3}</h2></Link>
             <Link to="tour-ele-4"> <h2 className="top-post-head">{item.heading4}</h2></Link>
             <Link to="tour-ele-5"> <h2 className="top-post-head">{item.heading5}</h2></Link>
             <Link to="tour-ele-6"> <h2 className="top-post-head">{item.heading6}</h2></Link>
             
            </div>
            <h6 className="footer">{item.footer}</h6>
            <hr />
            </div>
             
          ))

          }
          
         </div>
         <div className="tech-div-side2">
          <h1>Advertisements</h1>
         </div>
      </div>
      
         </div>
            
       
        

        </>
    )
}
export default Tourism;
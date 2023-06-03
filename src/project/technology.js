import React from "react";
import {Link} from "react-router-dom";
import  "./tech.css";


const Technology =(props)=>{

    console.log(props);
    return(
        <>
        <h1 className="tech-heading">Technology</h1>
        <hr />
        

    <div className="div-flex">
    <div className="container">

        { props.techList.map(item=>(
        
       
      
          <div className="tech-div">
          
            <img src={item.img} className="tech-img" />

             <Link to="tech-ele-1"> <h2 className="text-doc">{item.heading1}</h2></Link>
             <Link to="tech-ele-2"> <h2 className="text-doc">{item.heading2}</h2></Link>
             <Link to="tech-ele-3"> <h2 className="text-doc">{item.heading3}</h2></Link>
             <Link to="tech-ele-4"> <h2 className="text-doc">{item.heading4}</h2></Link>
             <Link to="tech-ele-5"> <h2 className="text-doc">{item.heading5}</h2></Link>
             <Link to="tech-ele-6"> <h2 className="text-doc">{item.heading6}</h2></Link>
           
           <p className="para-footer-style">{item.footer}</p>
          </div>
        
         
        
        

        
        ))}
          </div>
          
      <div>
      <div className="tech-div-side">
          <h1 className="latest-heading">Top Post</h1>
          {props.techList.map(item=>(
            <div>
            <div className="top-posts">
              <img src={item.img} className="latest-one"/>
              
              <h1 className="top-post-head">{item.heading}</h1>
              <Link to="tech-ele-1"> <h2 className="top-post-head">{item.heading1}</h2></Link>
             <Link to="tech-ele-2"> <h2 className="top-post-head">{item.heading2}</h2></Link>
             <Link to="tech-ele-3"> <h2 className="top-post-head">{item.heading3}</h2></Link>
             <Link to="tech-ele-4"> <h2 className="top-post-head">{item.heading4}</h2></Link>
             <Link to="tech-ele-5"> <h2 className="top-post-head">{item.heading5}</h2></Link>
             <Link to="tech-ele-6"> <h2 className="top-post-head">{item.heading6}</h2></Link>
             
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
export default Technology;
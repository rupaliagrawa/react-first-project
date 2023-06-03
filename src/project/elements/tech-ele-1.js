import "./../project.css";

 import React, { Component } from 'react';
import { FaFacebookSquare  } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutubeSquare  } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoIosContact} from "react-icons/io";
import { AiOutlineShareAlt} from "react-icons/ai";
import { FaHandsWash} from "react-icons/fa";

const TechArticle1 =(props)=>{
    console.log(props)
    return(
        <>
        
          {props.techElement.map(item=>(
        <>
        < div className="element-container">
          
           <h2 className="main-heading-style">{item.A1heading}</h2>
          
           <img src={item.A6img} className="img-ele"></img>
           
           
           <p className="para-style">{item.A2para}</p>
           <p className="para-style">{item.A4para1}</p>
           <p className="para-style">{item.A5para2}</p>
           <div className="icons-div">
           <IoIosContact className="io-icon"/>
           <h4>{item.A3by}</h4>
           <div className="icon-container">
           <FaFacebookSquare className="fa-icon"/>
           <FaLinkedin className="fa-icon"/>
           < FaWhatsappSquare className="fa-icon"/>
           <FaYoutubeSquare className="fa-icon"/>
           <FaTwitterSquare className="fa-icon"/>
           </div>
           </div>
           
           <AiOutlineShareAlt className="share-icon"/>
           <span>share</span>
           <FaHandsWash className="share-icon" />
           <span>clap</span>  

           </div>

            </>
      
          ))}
          
        </>
    )
}
export default TechArticle1;
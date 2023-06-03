import React from "react";
import {Link} from "react-router-dom";
import './courses.css';

function About (props){
    return(
        <>
        <h2>About</h2>
        <p>By: Lifestyle Desk
New Delhi | January 4, 2023 13:20 IST</p>
<img src="./fitness.jpg" />
<h3>Are you among those who believe these yoga-related myths?</h3>

        <p className="fit">Yoga is important for the holistic well-being of the body. Nowadays, many people have taken to stretching and other yoga asanas to boost their health and immunity.

It is said that there are specific yoga asanas that can take care of different ailments and parts of the body, which is why it is crucial to follow a routine every day diligently. Not only can yoga do wonders for the body — such as by targeting certain muscle groups, bones, improving the posture, etc. — it can also strengthen your brain by making it sharper and more focused, boosting the mood, providing emotional stability, and such.

There, however, are many myths surrounding yoga, which prevents people from taking them up. You may have heard of some of them yourself, or you may have unknowingly perpetuated some of these false beliefs. What are they? On Instagram, Anshuka Parwani — who is the yoga trainer to Bollywood actors like Alia Bhatt and Kareena Kapoor — debunked some myths in a reel.</p>
       
      <div className="link">
        <h2>Link</h2>
        <p>this is para of the Link to experiment</p>
         <Link to="/banner"><h1>BANNER</h1></Link></div>
        </>

    );
}

export default About;
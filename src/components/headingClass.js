import React, {Component} from "react";
//CLASS COMPONENT

class HeadingClass extends Component {

    render() {
        return(
            <>
            <h1 > welcome to react</h1>
            <p >React is very interesting . you will love it .</p>
            <button>Click Me</button>
            <img src="./logo512.png"></img>
            <div>
               <h2> Hope You are understanding react !</h2>
            </div>
            </>
        );
    }
    //class components are statefull components 
    //functional components are stateless components.


}
export default HeadingClass 
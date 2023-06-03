import React, { Component } from "react";
import Heading from "./heading.js";
import CourseJson from "./../courses.json";
import Courses from "./courses.js";

class Appp extends Component {
    state={
        heading:"Welcome to Courses ",
        courseList: CourseJson 
    }
    render(){
        return(
            <>
             <h1>hello</h1>
             <Heading heading={this.state.heading} />
             <Courses courseList={this.state.courseList}/>
            </>
           

        );
    }
}
export default Appp;
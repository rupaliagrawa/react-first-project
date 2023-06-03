import React,{Component} from "react";
import {BrowserRouter , Route, Routes } from "react-router-dom";

import About from "./components/about";
import Cour from "./components/cour";
//import Header from "./components/header";
import Home from "./components/homee";
import CourJson from "./cour.json";
import Banner from "./components/banner";
import MockTest from "./components/mock-tests/mock-test";
import MockTestDetails from "./components/mock-tests/mocktestDatails";

class App extends Component {
    state={
        aboutHead:CourJson
    }
    render(){
        return(
            <>
            
            <BrowserRouter>
            
            <Home />
            
             <Routes>
           
            
            <Route path="/cour" element={<Cour aboutHead={this.state.aboutHead} />} />
            
            <Route path="/about" element={ <About /> } />
            <Route path="/banner" element={ <Banner /> } />
            <Route path="/mock-test" element={ <MockTest />} />
            <Route path="/mock-test/:topic" element={ <MockTestDetails />} />
            
            
            </Routes>
            
         </BrowserRouter>
            
            </>
        );
    }
       
    
   
}
export default App ;





  






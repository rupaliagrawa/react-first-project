import React,{Component} from "react";
import {BrowserRouter , Route, Routes } from "react-router-dom";
import About from "./about";
import Cour from "./cour";
import Home from "./home";

class App extends Component {
    render(){
        return(
            <>
            
            <BrowserRouter>
            <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cour" element={<Cour />} />
            
            <Route path="/about" element={ <About /> } />
            </Routes>
            </BrowserRouter>
            
            </>
        );
    }
       
    
   
}
export default App ;

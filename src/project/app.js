import React ,{Component} from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from "./home";
import Header from "./header";
import Fitness from "./fitness";
import CourseJson from "./../courses.json";
import Tourism from "./tourism";
import Technology from "./technology";
import Bollywood from "./bollywood";
import Fitinfo from"./elements/fit-ele-1-";
import Fitinfo1 from "./elements/fit-ele-2";
import Fitinfo2 from "./elements/fit-ele-3";
import Fitinfo3 from "./elements/fit-ele-4";
import Fitinfo4 from "./elements/fit-ele-5";
import Fitinfo5 from "./elements/fit-ele-6";
import TechJson from "./../technology.json";
import TourJson from "./../tourism.json";
import HomeJson from "./../home.json";
import BollywoodJson  from "./../bollywood.json";
import FitnessItem from "./fitness-item.json";
import TechItem from "./tech-elements.json";
import TourItem from "./tour-element.json";
import BollyItem from "./bolly-item.json";
import TechArticle1 from "./elements/tech-ele-1";
import TechArticle2 from "./elements/tech-ele-2";
import TechArticle3 from "./elements/tech-ele-3";
import TechArticle4 from "./elements/tech-ele-4";
import TechArticle5 from "./elements/tech-ele-5";
import TechArticle6 from "./elements/tech-ele-6";
import TourElement1 from "./elements/tour-ele-1";
import TourElement2 from "./elements/tour-ele-2";
import TourElement3 from "./elements/tour-ele-3";
import TourElement4 from "./elements/tour-ele-4";
import TourElement5 from "./elements/tour-ele-5";
import TourElement6 from "./elements/tour-ele-6";
import BollyElement1 from "./elements/bolly-ele-1";
import BollyElement2 from "./elements/bolly-ele-2";
import BollyElement3 from "./elements/bolly-ele-3";
import BollyElement4 from "./elements/bolly-ele-4";
import BollyElement5 from "./elements/bolly-ele-5";
import BollyElement6 from "./elements/bolly-ele-6";


class App extends Component{

    state = {
        courseList: CourseJson,
        techList:TechJson,
        fitArticle:FitnessItem,
        techElement : TechItem,
        tourList :TourJson,
        tourElement:TourItem,
        homeList : HomeJson,
        bollyList : BollywoodJson,
        bollyElement : BollyItem
        
    }
    render(){
        return(
            <>
             <BrowserRouter>
             <Header />
             <Routes>
                
                <Route path="/" element={<Home homeList={this.state.homeList} />} />
                <Route path="/fitness" element={<Fitness  courseList={this.state.courseList}/>} />
                <Route path="/tourism" element={<Tourism tourList={this.state.tourList} />} />
                <Route path="/technology" element={<Technology techList={this.state.techList} />} />
               
                <Route path="//fit-ele-3" element={<Fitinfo2 fitArticle={this.state.fitArticle}/>} />
                <Route path="//tour-ele-3" element={<TourElement3 tourElement={this.state.tourElement} />} />
                <Route path="//tech-ele-3" element={<TechArticle3 techElement={this.state.techElement} />}/>
                <Route path="//bolly-ele-1" element={<BollyElement1 bollyElement={this.state.bollyElement} />} />
                <Route path="//tour-ele-6" element={<TourElement6 tourElement={this.state.tourElement} />} />
                <Route path="//fit-ele-4" element={<Fitinfo3 fitArticle={this.state.fitArticle} />} />
                <Route path="//tour-ele-2" element={<TourElement2 tourElement={this.state.tourElement} />} />
                <Route path="//fit-ele-1-" element={<Fitinfo fitArticle={this.state.fitArticle} />} />
                <Route path="//tech-ele-2" element={<TechArticle2 techElement={this.state.techElement} />}/>
                <Route path="/bollywood" element={<Bollywood bollyList={this.state.bollyList} />} />

                <Route path="/fitness/fit-ele-1-" element={<Fitinfo fitArticle={this.state.fitArticle} />} />
                <Route path="/fitness/fit-ele-2" element={<Fitinfo1 fitArticle={this.state.fitArticle} />} />
                <Route path="/fitness/fit-ele-3" element={<Fitinfo2 fitArticle={this.state.fitArticle} />} />
                <Route path="/fitness/fit-ele-4" element={<Fitinfo3 fitArticle={this.state.fitArticle} />} />
                <Route path="/fitness/fit-ele-5" element={<Fitinfo4 fitArticle={this.state.fitArticle} />} />
                <Route path="/fitness/fit-ele-6" element={<Fitinfo5 fitArticle={this.state.fitArticle} />} />
                <Route path="/technology/tech-ele-1" element={<TechArticle1 techElement={this.state.techElement} />}/>
                <Route path="/technology/tech-ele-2" element={<TechArticle2 techElement={this.state.techElement} />}/>
                <Route path="/technology/tech-ele-3" element={<TechArticle3 techElement={this.state.techElement} />}/>
                <Route path="/technology/tech-ele-4" element={<TechArticle4 techElement={this.state.techElement} />}/>
                <Route path="/technology/tech-ele-5" element={<TechArticle5 techElement={this.state.techElement} />}/>
                <Route path="/technology/tech-ele-6" element={<TechArticle6 techElement={this.state.techElement} />}/>
                <Route path="/tourism/tour-ele-1" element={<TourElement1 tourElement={this.state.tourElement} />} />
                <Route path="/tourism/tour-ele-2" element={<TourElement2 tourElement={this.state.tourElement} />} />
                <Route path="/tourism/tour-ele-3" element={<TourElement3 tourElement={this.state.tourElement} />} />
                <Route path="/tourism/tour-ele-4" element={<TourElement4 tourElement={this.state.tourElement} />} />
                <Route path="/tourism/tour-ele-5" element={<TourElement5 tourElement={this.state.tourElement} />} />
                <Route path="/tourism/tour-ele-6" element={<TourElement6 tourElement={this.state.tourElement} />} />
                <Route path="/bollywood/bolly-ele-1" element={<BollyElement1 bollyElement={this.state.bollyElement} />} />
                <Route path="/bollywood/bolly-ele-2" element={<BollyElement2 bollyElement={this.state.bollyElement} />} />
                <Route path="/bollywood/bolly-ele-3" element={<BollyElement3 bollyElement={this.state.bollyElement} />} />
                <Route path="/bollywood/bolly-ele-4" element={<BollyElement4 bollyElement={this.state.bollyElement} />} />
                <Route path="/bollywood/bolly-ele-5" element={<BollyElement5 bollyElement={this.state.bollyElement} />} />
                <Route path="/bollywood/bolly-ele-6" element={<BollyElement6 bollyElement={this.state.bollyElement} />} />
               
             </Routes>
             
             </BrowserRouter>
            </>
        )
    }
}
export default App;
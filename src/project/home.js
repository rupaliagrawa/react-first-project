import  "./home.css"
import {Link} from "react-router-dom";
//src="https://source.unsplash.com/random/width:300,height:100%/?nature"
const Home =(props)=>{
    return(
        <>
        
        <div>
        {props.homeList.map(item=>(
            <>
        <div className="grid-container">
            <div className="grid1">
            
           <Link to="tour-ele-2"> <h1 className="taj-m">{item.heading2}</h1></Link>
           
            </div>
            <div className="grid" >
           <Link to="fit-ele-1-"><h1 className="taj-m1">{item.headingF}</h1></Link> 
            </div>
           <div className="grid-2">  <Link to ="tech-ele-2"><h1 className="taj-m2">{item.B1heading}</h1> </Link>
           </div>
            
           
        </div>
        <h2>The Latest</h2>
       
        <div className="div-cont-2">
            <div className="containerA">
             <img src={item.A2img} className="img-latest"/>
             <Link to="bolly-ele-1"> <h4 className="heading-forth">{item.A1heading1}</h4></Link>
            </div>
            <div className="containerA">
            <img src={item.F2img} className="img-latest"/>
             <Link to ="tour-ele-6"><h4 className="heading-forth">{item.F1heading6}</h4></Link>
                 </div>
            <div className="containerA">
            <img src={item.A21img} className="img-latest"/>
             <Link to="fit-ele-4"><h4 className="heading-forth">{item.B22heading3}</h4></Link>
                 </div>

        </div>
        <h2>Latest Articles</h2>

        <div className="div-cont-3">
            <div>
                
            <div className="container1">
                <img src={item.G20img} className="image-style"/>
                <div className="img-hading-container">
                <h3 className="block-display">{item.A14heading2} </h3>
                <p className="font-family">{item.head2}</p>
                <Link to="fit-ele-3"><button className="botton-style">more</button></Link>
                </div>
              </div>
              <hr/>
             
              
            <div className="container1">
            <img src={item.aimg} className="image-style"/>
            <div className="img-hading-container">
                <h3  className="block-display">{item.aheading3} </h3>
                <p className="font-family">{item.para1}</p>
               <Link to="tour-ele-3"> <button className="botton-style">more</button></Link>
                </div>
            </div>
            <hr/>
            <div className="container1">
                 <img src={item.bimg} className="image-style"/>
                 <div className="img-hading-container">
                <h3 className="block-display">{item.bheading3} </h3>
                
                <p className="font-family">{item.para2}</p>
                <Link to="tech-ele-3"> <button className="botton-style">more</button></Link>
                </div>
                 </div>
                 <hr/>
            </div>
           
            <div className="side-div">
                <h2>Advertisements</h2>
            </div>

        </div>
        </>
))}
        </div>
        
        </>
    )
}
export default Home;
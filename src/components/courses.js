import  './courses.css';
function Courses(props){
    console.log(props);
    return(
        <>
         {props.courseList.map(item=>(
            <div class="box">
                <div className="color">
            
            <h3 className="box1">{item.heading}</h3>
            <p>{item.discription}</p>
            </div>
            </div>    
                 ))}
        </>
    )
}
export default Courses;
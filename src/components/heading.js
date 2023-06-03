import './../styles/heading.css';
//FUNCTIONAL COMPONENT

function Heading(props) {
    console.log(props);


   
    return(
        <>
        <h1 > {props.heading}</h1>
       
        
        </>
    )
}

export default Heading;
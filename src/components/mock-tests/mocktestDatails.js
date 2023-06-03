import { useParams } from "react-router-dom";

const MockTestDetails=(props)=>{
    console.log(props);
    let params = useParams();
    console.log(params, "PARAMS")
    
    return(
        <>
        <div>MockTestDetails</div>
        <div>{params.topic}</div>
        
        </>
    )
}
export default MockTestDetails;
import React from "react";
const Cour =(props)=>{
    console.log(props)
    return(
        <>
        <h2>Cour</h2>
        {
            props.aboutHead.map(item=>(
                <h2>{item.head}</h2>
            ))
        }

        </>
    )
}
export default Cour;
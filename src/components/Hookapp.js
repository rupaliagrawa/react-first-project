import { useState } from "react";

const App=() =>{
    console.log(useState());


    let [count, setCount] = useState(1)
    let [heading, setHeading]=useState("React Hooks")

    const changeCounter =()=>{
        setCount(prevCount=>{
            prevCount=prevCount*2
            return prevCount
        })
    }
    
    const changeHead =()=>{
        setHeading("Learning With React")
    }
    console.log(count)
    return(
        <>
         <h1>{`${heading} ${count}`}</h1>
         <button onClick={ changeCounter}>click me</button>
         <button onClick={changeHead}>update</button>
        </>
    )
}
export default App;
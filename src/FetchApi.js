import { useState, useEffect } from "react"
import Axios from "axios"
import axios from "axios";

export const FetchApi= ()=>{

    const [fact, setFact] = useState("");

    console.log('hi');
    // useEffect(()=>{
    //     Axios.get("https://catfact.ninja/fact").then((res)=>{
    //         setFact(res.data.fact)
    //     })

    // },[])

    const catchFact = ()=>{
        Axios.get("https://catfact.ninja/fact").then((res)=>{
            setFact(res.data.fact)
        })
    }    

    return(
        <div>
            <button onClick={catchFact}>Show me</button>
            <p>{fact}</p>
        </div>
    );

}
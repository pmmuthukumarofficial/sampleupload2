import { useState, useEffect } from "react";

export const Text= (props) =>
{
    const [text, setText]=useState("");

    useEffect(() =>{
        console.log("Mounted..")

        return ()=>{
            console.log('unmounted...');
        } ;        
    }, [])

    return (
        <div>
            <input onChange={(event)=>{
                setText(event.target.value)
            }}/>
            <h3>{text}</h3>
        </div>
    );
}
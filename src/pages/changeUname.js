import { useState } from "react"
import { useContext } from "react";


export const ChangeUname = () =>{

    const [newuname, setuname] =useState("");
//    const {username, setUsername} = useContext(MyData)

    return (       
        <div>
            {/* <input onChange={(event) => {setuname(event.target.value)}}/>
            <button onClick={()=>{setUsername(newuname)}}>Change usernaame</button> */}
        </div>
    );
        
}
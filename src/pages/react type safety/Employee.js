import { PropTypes } from "react";

export const Employee = (props)=>
{
    return (
        <div>
            <p>{props.empId}</p>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.role}</p>
        </div>
    );

    
}


import { Employee } from "./Employee";
import App from "../App";
import PropTypes from 'prop-types';

export const Home2=()=>{

    return(
        <div className='App'>
            <Employee empId="191" name="muthu" age="90" role="trainer" />
            
        </div>
    );
 
    
}

Employee.propTypes = {
    empId:PropTypes.number,
    name: PropTypes.string,
     email: PropTypes.string,
     age: PropTypes.number,
    // technologies: PropTypes.arrayOf(PropTypes.string)

}
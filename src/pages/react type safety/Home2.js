import { Employee } from "./Employee";

import PropTypes from 'prop-types';

export const Home2=()=>{

    return(
        <div className='App'>
            <Employee empId="191" name="muthu" age="sixty" role="trainer" />
            
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
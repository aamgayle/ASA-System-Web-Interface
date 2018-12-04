import React, {Component} from 'react';
import flag from './flag_small_25.png';

//Component to render Date headers for
//IndividualStudentTableSTU and IndividualStudentTablePROF pages

class AttendanceDate extends Component{
    render()
        {
        return(
            <td>{this.props.date}</td>
            )
        }
}

class AbscenceDate extends Component{
    render()
        {
        return(
            <th>{this.props.date}</th>
            )
        }
}


//Component to render Attendence cells for
//IndividualStudentTableSTU and IndividualStudentTablePROF pages
//Renders either an A or an A with a flag next to it to depict tardiness
class AttendanceStatus extends Component{
    render()
        {
            if(this.props.status === '0'){
                return <td>A</td>
            } else if(this.props.status === '1'){
                return <td>A<img alt="Tardy Flag" src={flag}/></td>
            }
            
            return <td></td>
        }
}

//Component to render Timestamp cells for 
//IndividualStudentTableSTU and IndividualStudentTablePROF pages
class AttendanceTime extends Component{
    render()
        {
        return(
            <td>{this.props.time}</td>
            )
        }
}

export{
    AttendanceDate,
    AttendanceStatus,
    AttendanceTime,
    AbscenceDate
}
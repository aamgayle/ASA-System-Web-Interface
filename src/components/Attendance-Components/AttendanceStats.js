import React, {Component} from 'react';

class AttendanceDate extends Component{
    state = {date: this.props.date}
    
    render()
        {
        return(
            <td>{this.state.date}</td>
            )
        }
}

class AttendanceStatus extends Component{
    state = {status: this.props.status}
    
    render()
        {
        return(
            <td>{this.state.status}</td>
            )
        }
}

class AttendanceTime extends Component{
    state = {time: this.props.time}
    
    render()
        {
        return(
            <td>{this.state.time}</td>
            )
        }
}

export{
    AttendanceDate,
    AttendanceStatus,
    AttendanceTime
}
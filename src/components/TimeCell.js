import React, {Component} from 'react';

class TimeCell extends Component{
    render(){
        return <td>{this.props.time}</td>
    }
}

export default TimeCell;
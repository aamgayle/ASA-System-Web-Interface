import React, {Component} from 'react';

class ClassListTableCell extends Component{
    render(){
        return <td>{this.props.class_info} {this.props.class_id}</td>
    }
}

export default ClassListTableCell;
import React, {Component} from 'react';

class ClassListTableCell extends Component{
    render(){
        return <td><a href={"/student-student-view/"+this.props.class_id+"/S0001"}>{this.props.class_name}</a></td>
    }
}

export default ClassListTableCell;
import React, {Component} from 'react';

class ClassListTableCellSTU extends Component{
    render(){
        return (
            <td>
                <a href={"/student-student-view/"+this.props.class_id+"/"+this.props.student_id}>
                    {this.props.class_name}
                </a>
            </td>)
    }
}

export default ClassListTableCellSTU;
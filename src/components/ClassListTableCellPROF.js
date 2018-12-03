import React, {Component} from 'react';

class ClassListTableCellPROF extends Component{
    render(){
        return (
            <td>
                <a href={"/student-prof-view/"+this.props.class_id+"/"+this.props.prof_id}>
                    {this.props.class_name}
                </a>
            </td>)
    }
}

export default ClassListTableCellPROF;
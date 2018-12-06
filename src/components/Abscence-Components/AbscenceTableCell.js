import React, {Component} from 'react';

class AbscenceTableCell extends Component{
    render(){
        return (
            <td>
                <a href={"/student-prof-view/"+this.props.class_id+"/"+this.props.prof_id}>
                    {this.props.class_name}
                </a>
            </td>)
    }
}

export default AbscenceTableCell;
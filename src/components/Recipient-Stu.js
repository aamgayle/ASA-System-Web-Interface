import React, {Component} from 'react';

class RecipientStu extends Component{
    state = {
        r_name: this.props.name,
        r_email: this.props.email        
    }
    render(){
        return(
            <tr>
                <td>{this.state.r_name}</td>
                <td>{this.state.r_email}</td>
            </tr>
        )
    }
}

export default RecipientStu;
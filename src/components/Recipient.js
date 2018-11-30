import React, {Component} from 'react';

class Recipient extends Component{
    state = {
        r_name: this.props.name,
        r_email: this.props.email        
    }
    render(){
        return(
            <tr>
                <td>{this.state.r_name}</td>
                <td>{this.state.r_email}</td>
                <td><button>Remove</button></td>
            </tr>
        )
    }
}

export default Recipient;
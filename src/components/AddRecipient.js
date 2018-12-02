import React, {Component} from 'react';
import { Container } from 'reactstrap';
class AddRecipient extends Component{
    state = {
        r_name: this.props.name,
        r_email: this.props.email        
    }
    render(){
        return(
                <tr>
                    <td>Recipient <br/><input type="text"></input></td>
                    <td>Recipient Email <br/><input type="text"></input>     <button>Add</button><span/></td>
                </tr>
        )
    }
}

export default AddRecipient;
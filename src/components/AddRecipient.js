import React, {Component} from 'react';
class AddRecipient extends Component{
    state = {
        r_name: this.props.name,
        r_email: this.props.email        
    }
    render(){
        return(
            <tr>
                <td>Add Email</td>
                <td>Recipient <input type="text"></input></td>
                <td>Recipient Email <input type="text"></input>     <button>+</button><span/></td>
            </tr>
        )
    }
}

export default AddRecipient;
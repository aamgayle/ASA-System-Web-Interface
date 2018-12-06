import React, {Component} from 'react';
import axios from 'axios'

class AddRecipient extends Component{
    state = {
        r_name: this.props.name,
        r_email: this.props.email        
    }

    printFields(name, email){
        console.log(name + " " + email);
    }

    addRecepient(name, email){
        console.log("Start")
        axios.patch('/api/students/addrec/'+this.props.sID+'/'+ name +'/'+ email)
        .catch(console.log("Didn't do it"))
        window.location.reload()
    }

    render(){
        return(
                <tr>
                    <td>Recipient <br/><input id="recipient-name" type="text"></input></td>
                    <td>Recipient Email <br/><input id="recipient-email" type="text"></input>     
                    <button onClick={()=>{this.addRecepient(document.getElementById('recipient-name').value, 
                                                            document.getElementById('recipient-email').value)}}>
                                                            Add
                                                            </button><span/></td>
                </tr>
        )
    }
}

export default AddRecipient;
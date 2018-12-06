import React, {Component} from 'react';
import axios from 'axios';

class RecipientProf extends Component{

    state = {
        r_name: this.props.name,
        r_email: this.props.email,      
        r_index: this.props.index,
        r_sID: this.props.sID
    }

    removeRecepient(){
        console.log("Start")
        axios.patch('/api/students/deleterec/'+ this.props.index +'/'+ this.props.sID)
        .catch(console.log("Didn't do it"))
        window.location.reload()
    }

    btnTapped(){
        console.log("CLICKED")
    }

    render(){
        return(
            <tr>
                <td>{this.state.r_name}</td>
                <td>{this.state.r_email}</td>
                <td><button onClick = {() => {this.removeRecepient()}}>Remove</button></td>
            </tr>
        )
    }
}

export default RecipientProf;
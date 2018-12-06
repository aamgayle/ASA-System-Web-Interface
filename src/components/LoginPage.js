import React, {Component} from 'react';
import {
    Input,
    Button,
    Container
} from 'reactstrap';
import axios from 'axios'

class LoginPage extends Component {
    state = {
        userID: "",
        attempts: 0,
        fail: false
    }

    removeRecepient(){
        console.log("Start")
        axios.get('/api/students/deleterec/'+ this.props.index +'/'+ this.props.sID)
        .then(success => console.log(success))
        .catch(console.log("Didn't do it"))

    }

    checkUser(username, password){
            axios.get('/api/profiles/'+ username +'/'+password)
                .then(success => {success.data.includes("S") && success !== "NO USER FOUND" ? window.location = "/classes/student/"+success.data : window.location = "/classes/prof/"+success.data})
                .catch(err => this.renderFailure(err))    

            // console.log(this.state.attempts)
            // this.renderFailure()
        }
        
    renderFailure(err){
        if(this.state.attempts < 5){
            document.getElementById('fail-message').innerHTML = "Wrong username/password. Try again"
            this.setState({attempts: this.state.attempts + 1})
            console.log(this.state)
        } else {
            document.getElementById('fail-message').innerHTML = "Max attempts exceeded. Please try again later"
        }
    }

    render(){
        return(
            <Container>
                <h1 className="text-center">FAMU</h1>
                <h3 className="text-center">Automatic Student Attendence System</h3>
                <br/>
                <br/>
                <h4 className="text-center">Login</h4>
                Username:
                <Input type="text" id="username_input" name="username_input"/>
                Password:
                <Input type="text" id="password_input" name="password_input"/>
                <br/>
                <h4 id="fail-message"></h4>
                <div>Remember me <input type="checkbox"></input></div> 
                <br/>
                <Button onClick={() => {this.checkUser(document.getElementById("username_input").value,
                                                        document.getElementById("password_input").value)}}>SUBMIT</Button>
            </Container>
        )
    }
}

export default LoginPage;
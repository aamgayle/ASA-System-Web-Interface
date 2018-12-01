import React, {Component} from 'react';
import {
    Input,
    Button,
    Container
} from 'reactstrap';

class LoginPage extends Component {
    state = {
        username: "",
        password: "",
        login_status: false
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
                <div>Remember me <input type="checkbox"></input></div> 
                <br/>
                <Button>SUBMIT</Button>
            </Container>
        )
    }
}

export default LoginPage;
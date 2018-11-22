import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';

import uuid from 'uuid';

class StudentList extends Component {
    state = {
        students: [
            {id: uuid(), name: "Asa"},
            {id: uuid(), name: "George"},
            {id: uuid(), name: "Courage"},
            {id: uuid(), name: "Udochi"}
        ]
    }

    render(){
        const {students} = this.state;
        let buttonStyle = {
            marginBottom:"2rem"
        }

        return(
            <Container>
                <Button
                    color="dark"
                    style={buttonStyle}
                    onClick={() =>{
                        const name = prompt('Enter Student'); 
                    }}
                    >Add Student</Button>
            </Container>
        )
    }
}

export default StudentList;
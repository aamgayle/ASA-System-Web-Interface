import React, {Component} from 'react';
import {Container, Table, Button} from 'reactstrap';
import TimeCell from './TimeCell'
import axios from 'axios';
import ClassListTableCell from './ClassListTableCellSTU';

class ClassListTableSTU extends Component{
    state = {
        courses: []
    };

    //this.props.match.params.stuID
    
    componentDidMount(){
        axios.get('/api/courses')
            .then(res =>{
                this.setState({courses: res.data})
            })
    }

    createTimeCell(ptime){
        return(
            <TimeCell time={ptime}/>
        )
    }
    
    render()
        {
        return(
            <Container>
                <h1>Class Schedule</h1>
                <h2>Marion Hamron</h2>
                <h3>Fall - 2018</h3>
                <br/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <TimeCell time="00:00"/><td>Some Class</td><td>Some Class</td>
                            <ClassListTableCell class_name="Test" class_id="CIS2006" student_id="S0001"/>
                            <td>Some Class</td>
                            <td>Some Class</td>
                        </tr>
                        <tr>
                            <TimeCell time="11:00 PM"/>
                            <td><a href="https://google.com">Another Class</a></td>
                            <td> </td>
                            <td><a href="https://google.com">Another Class</a></td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>02:00 PM</td>
                            <td> </td>
                            <td><a href="https://google.com">Another Class</a></td>
                            <td> </td>
                            <td><a href="https://google.com">Another Class</a></td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>03:00 PM</td>
                            <td><a href="https://google.com">Another Class</a></td>
                            <td> </td>
                            <td><a href="https://google.com">Another Class</a></td>
                            <td> </td>
                            <td><a href="https://google.com">Another Class</a></td>
                        </tr>
                    </tbody>
                </Table>
                <button onClick={this.displayState}></button>
            </Container>
            
        )
    }
}

export default ClassListTableSTU;
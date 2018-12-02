import React, {Component} from 'react';
import {Container, Table, Button} from 'reactstrap';
import TimeCell from './TimeCell'
import axios from 'axios';
import ClassListTableCell from './ClassListTableCell';

class ClassListTable extends Component{
    state = {
        courses: []
    };

    componentDidMount(){
        axios.get('/api/courses')
            .then(res =>{
                console.log("Before function")
                console.log(this.state)
                this.setState({courses: res.data})
                console.log("This is the state")
                console.log(this.state)
            })
    }

    createTimeCell(ptime){
        return(
            <TimeCell time={ptime}/>
        )
    }
    
    displayState(){
        console.log(this.state.courses);
    }

    render()
        {
        return(
            <Container>
                <ul>
                    {this.state.courses.map(course => <li>{JSON.stringify(course)}</li>)}
                </ul>
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
                            <TimeCell time="poop"/><td>Some Class</td><td>Some Class</td>
                            <ClassListTableCell class_name="Test" class_id="Another Test"/>
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

export default ClassListTable;
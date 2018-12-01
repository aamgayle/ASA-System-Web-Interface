import React, {Component} from 'react';
import {Container, Table} from 'reactstrap';
import TimeCell from './TimeCell'

class ClassListTable extends Component{
    
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
                            <TimeCell time="15:00 PM"/>
                            <td>Some Class</td>
                            <td>Some Class</td>
                            <td>Some Class</td>
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
            </Container>
            
        )
    }
}

export default ClassListTable;
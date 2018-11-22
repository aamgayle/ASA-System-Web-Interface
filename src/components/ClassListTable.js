import React, {Component} from 'react';
import {Container, Table} from 'reactstrap';
import ClassListTableCell from './ClassListTableCell'
import TimeCell from './TimeCell'
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class ClassListTable extends Component{
    
    render()
        {
        return(
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
        )
    }
}

export default ClassListTable;
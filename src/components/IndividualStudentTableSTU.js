import React, {Component} from 'react';
import {Table} from 'reactstrap';
import RecipientStu from './RecipientStu'
import axios from 'axios'

class IndividualStudentTableSTU extends Component{
    state = {
        classID: this.props.match.params.classID,
        first_Name: "",
        last_Name: "",
        recepient:[]
    }

    componentDidMount(){
        axios.get('/api/students/single/'+this.props.match.params.stuID)
            .then(res =>{
                this.setState({...res.data[0]})
                console.log("This is the state")
                console.log(this.state)
            })
    }

    render()
        {
            if(this.state.recepient === null) return null;
            else{
                return(
                    <div>
                        <h2>{}</h2>
                        <h2 className="text-center">Student Name {this.state.first_Name} {this.state.last_Name}</h2>
                        <h2 className="text-center">{this.props.match.params.classID}</h2>
                        <h2 className="text-center">FALL 2018</h2>
                        <Table>
        
                        </Table>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Recipient</th>
                                    <th>Recipient Email</th>
                                </tr>
                                {this.state.recepient.map(r => <RecipientStu name={r[0]} email={r[1]}/>)}
                                </thead>
                            <br/>
                            <tbody>
                                <h4>Report</h4>
                                <h6>**TOTAL ABSCENSES/SOFT ABSCENSES </h6>
                                <Table striped hover bordered >
                                    <tr>
                                        <td>Date</td>
                                        <td>Test-Date</td>
                                        <td>Test-Date</td>
                                        <td>Test-Date</td>
                                        <td>Test-Date</td>
                                        <td>Test-Date</td>
                                        <td>Test-Date</td>
                                        <td>Test-Date</td>
                                        <td>Test-Date</td>
                                        <td>Test-Date</td>
                                        <td>Test-Date</td>
                                        <td>Test-Date</td>
                                        <td>Test-Date</td>
                                        <td>Test-Date</td>
                                    </tr>
                                    <tr>
                                        <td>Attendence</td>
                                        <td>Absent</td>
                                        <td>Tardy</td>
                                        <td>Absent</td>
                                        <td>Tardy</td>
                                        <td>Absent</td>
                                        <td>Tardy</td>
                                        <td>Absent</td>
                                        <td>Tardy</td>
                                        <td>Absent</td>
                                        <td>Tardy</td>
                                        <td>Absent</td>
                                        <td>Tardy</td>
                                        <td>Absent</td>
                                    </tr>
                                    <tr>
                                        <td>Timestamp</td>
                                        <td>00:00</td>
                                        <td>00:00</td>
                                        <td>00:00</td>
                                        <td>00:00</td>
                                        <td>00:00</td>
                                        <td>00:00</td>
                                        <td>00:00</td>
                                        <td>00:00</td>
                                        <td>00:00</td>
                                        <td>00:00</td>
                                        <td>00:00</td>
                                        <td>00:00</td>
                                        <td>00:00</td>
                                    </tr>
                                </Table>
                            </tbody>
                        </Table>
                    </div>
                    )
            }
 
    }
}

export default IndividualStudentTableSTU;
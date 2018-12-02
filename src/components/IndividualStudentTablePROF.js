import React, {Component} from 'react';
import {Table} from 'reactstrap';
import AddRecipient from './AddRecipient'
import RecipientProf from './Recipient-Prof'
import axios from 'axios'

class IndividualStudentTablePROF extends Component{
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
        return(
            <div>
               
                <h2 className="text-center">Student Name Hilary Maduakor</h2>
                <h2 className="text-center">DATABASE MANAGEMENT SYSTEMS CIS-1005</h2>
                <h2 className="text-center">FALL 2018</h2>
                <Table>

                </Table>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Recipient</th>
                            <th>Recipient Email</th>
                            <th>Action</th>
                        </tr>
                        {this.state.recepient.map(r => <RecipientProf name={r[0]} email={r[1]}/>)}
                        
                        <tr><th>Add Email</th></tr>
                        <AddRecipient/>
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

export default IndividualStudentTablePROF;
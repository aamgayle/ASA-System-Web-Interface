import React, {Component} from 'react';
import {Table} from 'reactstrap';
import RecipientStu from './Recipient-Stu'

class IndividualStudentTableSTU extends Component{
    // state = {
    //     studnent_name: props.match.studnent_name,
    //     class_name: this.props.class_name,
    //     class_number: this.props.class_number,
    //     class_semester: this.props.class_semester
    // }
    // <h2>{this.state.studnent_name}</h2>
    // <h2>{this.state.class_name} {this.state.class_number}</h2>
    // <h2>{this.state.class_semester}</h2>

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
                        </tr>
                        <RecipientStu name="Asa Gayle" email="azmatch.gayle@gmail.com"/>
                        <RecipientStu name="George Kurian" email="george.kurian@gmail.com"/>
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

export default IndividualStudentTableSTU;
import React, {Component} from 'react';
import {Table} from 'reactstrap';
import AddRecipient from '../AddRecipient'
import RecipientProf from '../Recipient-Prof'
import axios from 'axios'
import {AttendanceDate, AttendanceStatus, AttendanceTime} from './AttendanceStats'

class IndividualStudentTablePROF extends Component{
    state = {
        classID: this.props.match.params.classID,
        coursename: "",
        first_Name: "",
        last_Name: "",
        recepient:[],
        cID_Attendence:{}
    }

    ABSCENSES = 0;
    TARDIES = 0;
    
    //Makes call to API for a single student's information using
    //passed parameters via URL and sets information to state
    componentDidMount(){
        axios.get('/api/students/single/'+this.props.match.params.stuID)
            .then(res =>{
                this.setState({...res.data[0]})
            });
        axios.get('/api/courses/coursename/' + this.state.classID)
            .then(res => this.setState({coursename : res.data}))
         
    }

    isAbsent(index){
        if(this.state.cID_Attendence[this.state.classID][1][index] !== ""){
            return true;
        }
        return false;
    }

    getStatus(index){
        return this.state.cID_Attendence[this.state.classID][1][index]
    }

    addAbsence(index){
        if(this.getStatus(index) === "0"){
            this.ABSCENSES++;
        } else {
            this.TARDIES++;
            this.ABSCENSES++;
        }
    }

    renderDates(){
        if(this.state.cID_Attendence[this.state.classID] !== undefined){
            return this.state.cID_Attendence[this.state.classID][0].map((d, index) => {
                if(this.isAbsent(index)) 
                {
                    this.addAbsence(index)
                    return <AttendanceDate key={index} date={d}/>
                }})
            }
    }

    renderAttendance(){
        if(this.state.cID_Attendence[this.state.classID] !== undefined){
            return this.state.cID_Attendence[this.state.classID][1].map((d, index) => {
                if(this.isAbsent(index)) return <AttendanceStatus key={index} status={d}/>
            })
        }
    }

    renderTime(){
        if(this.state.cID_Attendence[this.state.classID] !== undefined){
            return this.state.cID_Attendence[this.state.classID][2].map((d, index) => {
                if(this.isAbsent(index)) return <AttendanceTime key={index} time={d}/>
            })
        } 
    }


    render()
        {
            if(this.state.recepient === null) return null;
            else{
                return(
                    <div>
                       <h2 className="text-center">Student Name: {this.state.first_Name} {this.state.last_Name}</h2>
                        <h2 className="text-center">Course: {this.props.match.params.classID} - {this.state.coursename}</h2>
                        <h2 className="text-center">Term: FALL 2018</h2>

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
                                        {this.renderDates()}
                                    </tr>
                                    <tr>
                                        <td>Attendence</td>
                                        {this.renderAttendance()}
                                    </tr>
                                    <tr>
                                        <td>Timestamp</td>
                                        {this.renderTime()}
                                    </tr>
                                </Table>
                            </tbody>
                        </Table>
                    </div>
                    )
                }
        }
}

export default IndividualStudentTablePROF;
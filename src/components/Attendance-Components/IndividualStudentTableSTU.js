import React, {Component} from 'react';
import {Table} from 'reactstrap';
import RecipientStu from '../RecipientStu'
import axios from 'axios'
import { AttendanceDate, AttendanceStatus, AttendanceTime } from './AttendanceStats';

class IndividualStudentTableSTU extends Component{
    state = {
        classID: this.props.match.params.classID,
        first_Name: "",
        last_Name: "",
        recepient:[],
        cID_Attendence:{},
        days_absent: 0,
        days_tardy: 0
    }
    ABSCENSES = 0;
    TARDIES = 0;
    
    componentDidMount(){
        axios.get('/api/students/single/'+this.props.match.params.stuID)
            .then(res =>{
                this.setState({...res.data[0]})
                console.log("This is the state")
                console.log(this.state)
            })
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
            this.TARDIES += 1;
            this.ABSCENSES++;
        } else {
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
            } else {
                console.log(this.state.cID_Attendence)
            }
    }

    renderAttendence(){
        if(this.state.cID_Attendence[this.state.classID] !== undefined){
            return this.state.cID_Attendence[this.state.classID][1].map((d, index) => {
                if(this.isAbsent(index)) return <AttendanceStatus key={index} status={d}/>
            })
        } else {
            console.log(this.state.cID_Attendence)
        }
    }

    renderTime(){
        if(this.state.cID_Attendence[this.state.classID] !== undefined){
            return this.state.cID_Attendence[this.state.classID][2].map((d, index) => {
                if(this.isAbsent(index)) return <AttendanceTime key={index} time={d}/>
            })
        } else {
            console.log(this.state.cID_Attendence)
        }
    }

    render()
        {
            if(this.state.recepient === null) return null;
            else{
                return(
                    <div>
                        <h2 className="text-center">Student Name {this.state.first_Name} {this.state.last_Name}</h2>
                        <h2 className="text-center">{this.props.match.params.classID}</h2>
                        <h2 className="text-center">FALL 2018</h2>

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
                                <h6>**TOTAL ABSCENSES/SOFT ABSCENSES - {this.ABSCENSES}/{this.TARDIES}</h6>
                                <Table striped hover bordered >
                                    <tr>
                                        <td>Date</td>
                                        {this.renderDates()}
                                    </tr>
                                    <tr>
                                        <td>Attendence</td>
                                        {this.renderAttendence()}
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

export default IndividualStudentTableSTU;
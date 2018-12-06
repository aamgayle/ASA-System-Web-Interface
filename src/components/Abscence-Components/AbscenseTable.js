import React, {Component} from 'react';
import TardyWindow from "../TardyWindow";
import axios from 'axios'
import {Container, Table} from 'reactstrap';
import {AbscenceDate, AttendanceStatus} from '../Attendance-Components/AttendanceStats';
import AbscenceTableCell from './AbscenceTableCell';

class AbscenseTable extends Component{
    state = {
        students: [],
        date:[]
    }

    componentDidMount(){
        axios.get('/api/students/multi/'+this.props.match.params.courseID)
            .then(res =>{
                this.setState({students: Object.entries({...res.data}).map( students => {
                        return [
                            students[1]["_id"],
                            students[1]["first_Name"],
                            students[1]["last_Name"],
                            students[1]["cID_Attendence"][this.props.match.params.courseID]
                        ]
                    }  
                )})
                this.setDates()
                console.log(this.state)
            });
        }
        
        isAbsent(status){
            if(status !== ""){
                return true;
            }
            return false;
        }
    
        getStatus(index){
            return this.state.cID_Attendence[this.state.classID][1][index]
        }

        setDates(){
                this.setState({date: this.state.students[0][3][0]})
                console.log(this.state)
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
            return (
                        this.state.date.map(d=> <AbscenceDate date={d}/>)
            )
        }
                
        renderDate(pdate){
            return(<AbscenceDate date={pdate}/>)
        }

        renderAttendence(){
                return (
                    this.state.students.map(student => {
                        return(
                            <tr>
                                <AbscenceTableCell 
                                    class_id={this.props.match.params.courseID} 
                                    prof_id={student[0]} 
                                    class_name={student[1] + " " + student[2]
                                }/>
                                {this.renderStatus(student[3][1])}
                            </tr>
                        )
                    }
                )
            )
        }
    
        renderStatus(attendance){
            return (
                attendance.map(status=> <AttendanceStatus status={status}/>
                )
            )
        }

    render()
        {
        return(
            <Container>
                <h1>CIS-4005 ATTENDENCE REPORT</h1>
                <Table id = "info" width = "100%" cellpadding = "10" cellspacing = "10" border = "3" >
                    <tr> 
                        <th>INSTRUCTOR - Dr. Hendricks </th>
                        <th> Datbase Managment</th>
                        <th> FALL - 2018 </th>
                    </tr>
                </Table>

                <Table striped hover  border = "3" >
                    <tr>
                        <td colspan = "1"></td>
                        <td colspan = "15">DATES</td>
                    </tr>
                    <tr>
                        <th>Student Name</th>
                        {this.renderDates()}
                    </tr>
                    {this.renderAttendence()}
                </Table>

                <p>** TOTAL ABSENCE/SOFT ABSENCE </p>
                    <TardyWindow courseID = {this.props.match.params.courseID}/>
            </Container>
            
        )
    }
}

export default AbscenseTable;
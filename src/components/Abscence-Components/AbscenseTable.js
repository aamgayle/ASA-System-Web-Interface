import React, {Component} from 'react';
import axios from 'axios'
import {Container, Table} from 'reactstrap';
import {AttendanceDate, AttendanceTime, AttendanceStatus} from '../Attendance-Components/AttendanceStats';

class AbscenseTable extends Component{
    state = {

    }

    componentDidMount(){
        axios.get('/api/students/multi/'+this.props.match.params.courseID)
            .then(res =>{
                this.setState({...res.data})
                console.log(this.props.match.params.courseID)
                console.log(this.state)
            });
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
        return(
            <Container>
                <h1>CIS-4005 ATTENDENCE REPORT</h1>
                <table id = "info" width = "100%" cellpadding = "10" cellspacing = "10" border = "2" >
                    <tr> 
                        <th>INSTRUCTOR - Dr. Hendricks </th>
                        <th> Datbase Managment</th>
                        <th> FALL - 2018 </th>
                    </tr>
        
                </table>
        
        
                    <table width = "100%" cellpadding = "10" cellspacing = "10" border = "2" >
                        <tr>
                            <td colspan = "2"></td>
                            <td colspan = "12">DATES</td>
                            <td> TOTAL**  </td>
                        </tr>
                        <tr>
                            
                            <th >FIRST NAME</th>
                            <th >LAST NAME</th>
                            <AttendanceDate date="5/9"/>
                            <td> 7/9</td>
                            <td> 12/9</td>
                            <td> 14/9</td>
                            <td> 19/9</td>
                            <td> 21/9</td>
                            <td> 26/9</td>
                            <td> 28/9</td>
                            <td> 3/10</td>
                            <td> 5/10</td>
                            <td> 10/10</td>
                            <td> 12/10</td>
                            <td> ABSENCE</td>
                        </tr>
                        <tr>
                            
                            <th> HILLARY </th>
                            <th>MADUAKOR</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>A<img src = "C:\Users\George\Documents\software engineering\project\html work\triangular-flag.png"/>> </td>
                            <td>A<img src = "C:\Users\George\Documents\software engineering\project\html work\triangular-flag.png"/>></td>
                            <td>2/2</td>
                        </tr>
                        <tr>
                            
                            <th > GEORGE </th> 
                            <th>KURIAN</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>A</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>1/0</td>
                        </tr>
                        <tr>
                            
                            <th> HILLARY </th>
                            <th>MADUAKOR</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td></td>
                        </tr>
                        <tr>
                            
                            <th > GEORGE </th> 
                            <th>KURIAN</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            
                            <th> HILLARY </th>
                            <th>MADUAKOR</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            
                            <th > GEORGE </th> 
                            <th>KURIAN</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            
                            <th> HILLARY </th>
                            <th>MADUAKOR</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            
                            <th > GEORGE </th> 
                            <th>KURIAN</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            
                            <th> HILLARY </th>
                            <th>MADUAKOR</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            
                            <th > GEORGE </th> 
                            <th>KURIAN</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            
                            <th> HILLARY </th>
                            <th>MADUAKOR</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            
                            <th > GEORGE </th> 
                            <th>KURIAN</th>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                    </table>
                    <p>** TOTAL ABSENCE/SOFT ABSENCE </p>
        
            </Container>
            
        )
    }
}

export default AbscenseTable;
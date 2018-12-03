import React, {Component} from 'react';
import {Container, Table, Button} from 'reactstrap';
import TimeCell from './TimeCell'
import axios from 'axios';
import ClassListTableCell from './ClassListTableCellSTU';

class ClassListTableSTU extends Component{
    state = {
        courses: [],
        daysObj:{
            "Monday":"1",
            "Tuesday":"2",
            "Wednesday":"3",
            "Thursday":"4",
            "Friday":"5"
        },
        timeObj:{},
        sortedObj:{}
    };

    //this.props.match.params.stuID
    
    componentDidMount(){
        axios.get('/api/courses/multi/'+this.props.match.params.stuID)
            .then(res =>{
                this.setState({courses: res.data})
                this.setTimeObject()
                //console.log(this.state.timeObj)
            })
    }

    setTimeObject(){
        let courses = this.state.courses;
        for(let i=0; i<courses.length; i++){
            for(let j=0; j<courses[i].day_Time.length; j++){
                if(this.state.timeObj[courses[i].day_Time[j][1]] === undefined){
                    this.setState(this.state.timeObj[courses[i].day_Time[j][1]] = {
                        "1":[],
                        "2":[],
                        "3":[],
                        "4":[],
                        "5":[]
                    })
                }
                this.setState(this.state.timeObj[courses[i].day_Time[j][1]][this.state.daysObj[courses[i].day_Time[j][0]]] = [courses[i].course_Name,courses[i]._id])
            }
        }
    }

    renderDay(class_name, class_id, student_id){
        return(
            <td>
                <a href={"/student-student-view/"+class_id+"/"+student_id}>
                    {class_name}
                </a>
            </td>
        )
    }

    renderWeek(){
        return(
            Object.entries(this.state.timeObj).map(timeArr =>{
                return(
                    <tr>
                        <TimeCell time={timeArr[0]}/>
                        {Object.entries(timeArr[1]).map(days =>{
                            return(
                                this.renderDay(days[1][0], days[1][1], "S0001")
                            )
                        })}
                    </tr>
                    )
                })
        )
    }

    createTimeCell(ptime){
        return(
            <TimeCell time={ptime}/>
        )
    }
    
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
                        {this.renderWeek()}
                    </tbody>
                </Table>
            </Container>
            
        )
    }
}

export default ClassListTableSTU;
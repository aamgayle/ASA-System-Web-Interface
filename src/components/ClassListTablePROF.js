import React, {Component} from 'react';
import {Container, Table, Button} from 'reactstrap';
import TimeCell from './TimeCell'
import axios from 'axios';
import ClassListTableCellPROF from './ClassListTableCellPROF';

class ClassListTablePROF extends Component{
    state = {
        name: "",
        courses: [],
        daysObj:{
            "Monday":"1",
            "Tuesday":"2",
            "Wednesday":"3",
            "Thursday":"4",
            "Friday":"5"
        },
        timeObj:{}
    };

    componentDidMount(){
        axios.get('/api/courses/multi/prof/'+this.props.match.params.profID)
            .then(res =>{
                this.setState({courses: res.data})
                this.setTimeObject()
                console.log(this.state.timeObj)
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

    renderWeek(){
        return(
            Object.entries(this.state.timeObj).map(timeArr =>{
                return(
                    <tr>
                        <TimeCell time={timeArr[0]}/>
                        {
                            Object.entries(timeArr[1]).map(days =>{
                                return <ClassListTableCellPROF class_id={days[1][1]} prof_id={this.props.match.params.profID} class_name={days[1][0]}/>
                                })
                        }
                    </tr>
                    )
                }
            )
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

export default ClassListTablePROF;
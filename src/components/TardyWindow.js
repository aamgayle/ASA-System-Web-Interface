import {Container} from 'reactstrap';
import React, {Component} from 'react';
import axios from 'axios'
import SchoolDropdownMenu from './DropdownMenu'


class TardyWindow extends Component {

    print(){
        let time = document.getElementById("dropdown").innerHTML;

        if(time === "5 Minutes") {
            console.log(5)
            this.setTimeWindow(5)
        }
        if(time === "10 Minutes") {
            console.log(10)
            this.setTimeWindow(10)
        }
        if(time === "15 Minutes") {
            console.log(15)
            this.setTimeWindow(15)
        }
        if(time === "No Interval") {
            console.log(0)
            this.setTimeWindow(0)
        }
    }

    setTimeWindow(time){
            console.log("Start")
            axios.patch('/api/courses/settimewindow/'+this.props.courseID +'/'+ time)
            .catch(console.log("Didn't do it"))
    }

    render(){
        return(
            <Container>
                <h3>SET ATTENDENCE REGISTRATION</h3>
                Enter the time period: <SchoolDropdownMenu/>
                <br/>
                <button onClick={() => {this.print()}}>SET</button>
            </Container>
        )
    }
}

export default TardyWindow;
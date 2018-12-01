import {Container} from 'reactstrap';
import React, {Component} from 'react';

import SchoolDropdownMenu from './DropdownMenu'


class TardyWindow extends Component {

    render(){
        return(
            <Container>
                <h1>SET ATTENDENCE REGISTRATION</h1>
                Enter the time period: <SchoolDropdownMenu/>
                <br/>
                <button>SET</button>
            </Container>
        )
    }
}

export default TardyWindow;
import {Container} from 'reactstrap';
import React, {Component} from 'react';

import SchoolDropdownMenu from './DropdownMenu'


class TardyWindow extends Component {

    render(){
        return(
            <Container>
                <h3>SET ATTENDENCE REGISTRATION</h3>
                Enter the time period: <SchoolDropdownMenu/>
                <br/>
                <button>SET</button>
            </Container>
        )
    }
}

export default TardyWindow;
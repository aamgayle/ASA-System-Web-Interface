import React, {Component} from 'react';
import {Container, Table} from 'reactstrap';
import ClassListTableCell from './ClassListTableCell'
import TimeCell from './TimeCell'
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class AbscenseTable extends Component{
    
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
                            <td> 5/9</td>
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
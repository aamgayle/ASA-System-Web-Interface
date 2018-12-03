import AbscenceTable from './components/AbscenseTable';
import AppNavbar from './components/AppNavbar';
import ClassListTableSTU from './components/ClassListTableSTU'
import ClassListTablePROF from './components/ClassListTablePROF'
import IndividualStudentTablePROF from './components/Attendance-Components/IndividualStudentTablePROF';
import IndividualStudentTableSTU from './components/Attendance-Components/IndividualStudentTableSTU';
import LoginPage from './components/LoginPage'
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import TardyWindow from './components/TardyWindow'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "",
      isLoaded: false
    };
  }

  componentDidMount(){
    console.log("Fetching...")
    fetch('/api/students/single/55555')
      .then(res => this.setState({
        isLoaded: true,
        info: "Done"
      }))
  };

  render() {
    let {isLoaded, info} = this.state;
    
    if(!isLoaded){
      return <div>Loading...</div>
    } else{
      return (
        <div className="App">
          <AppNavbar/>
          <Router>
          <div>
            <Route exact path="/" component={LoginPage} />
            <Route path="/abscences" component={AbscenceTable}/>
            <Route path="/classes/student/:stuID" render={(props) => <ClassListTableSTU {...props}/>}/>
            <Route path="/classes/prof/:profID" render={(props) => <ClassListTablePROF {...props}/>}/>
            <Route path="/student-prof-view/:classID/:stuID" render={(props) => <IndividualStudentTablePROF {...props}/>}/>
            <Route path="/student-student-view/:classID/:stuID" render={(props) => <IndividualStudentTableSTU {...props}/>}/>
            <Route path="/tardy-window-example" component={TardyWindow}/>
          </div>
          </Router>
          
        </div>
      );
    }
  }
}

export default App;

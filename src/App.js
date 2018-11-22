import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ClassListTable from './components/ClassListTable'

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
/*      .then(json => this.setState({info: json, isLoaded: true}))
      .then(json => console.log("Done"))*/
  };


  render() {
    let {isLoaded, info} = this.state;
    
    if(!isLoaded){
      return <div>Loading...</div>
    } else{
      return (
        <div className="App">
          <AppNavbar />
          <ClassListTable/> 
          <input type="text" class="text-field"></input>
          <button class="access-button">SEND</button>
          <br/>
          <div class="show-result">{info}</div>
          
        </div>
      );
    }
  }
}

export default App;

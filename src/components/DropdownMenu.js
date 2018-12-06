import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SchoolDropdownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.replaceText = this.replaceText.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  replaceText(event){
    document.getElementById("dropdown").innerHTML = event.target.innerHTML
  }

  render() {
    return (
      <Dropdown setActiveFromChild isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle id="dropdown" caret>
          Time Period
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem onClick={this.replaceText}>No Interval</DropdownItem>
            <DropdownItem onClick={this.replaceText}>5 Minutes</DropdownItem>
            <DropdownItem onClick={this.replaceText}>10 Minutes</DropdownItem>
            <DropdownItem onClick={this.replaceText}>15 Minutes</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
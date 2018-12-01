import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SchoolDropdownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Time Period
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem>No Interval</DropdownItem>
            <DropdownItem>5 Minutes</DropdownItem>
            <DropdownItem>10 Minutes</DropdownItem>
            <DropdownItem>15 Minutes</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
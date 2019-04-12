import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
export default class Filter extends Component {
  render() {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Locations
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Berlin</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Hamburg</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Köln</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Düsseldorf</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        ;
      </div>
    );
  }
}

import React, { Component } from "react";

class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.locationsRef = React.createRef();
    this.availabilityRef = React.createRef();
  }
  updateSearch = selectedOption => {
    //this.setState({ search: selectedOption /* .substring(0, 7) */ });
    //this.props.searchChanged(selectedOption.target.value);
    //console.log("availabilityRef current value", this.availabilityRef.current.value);
    //console.log("locations current value", this.locationsRef.current.value);
  };

  render() {
    const { allUsers } = this.props;
    const locations = [];

    allUsers.map(user => {
      if (locations.indexOf(user.location) < 0) {
        locations.push(user.location);
      }
      return null;
    });
    /*allUsers.map(user => {
      if (availability.indexOf(user.availability) < 0) {
        availability.push(user.availability);
      }
      return null;
    });*/

    return (
      <div>
        <select
          className="DropDownSelect"
          name="location"
          onChange={this.updateSearch}
          ref={this.locationsRef}
        >
          <option value="">All Locations</option>
          {locations.map(item => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select
          className="DropDownSelect"
          name="availability"
          onChange={this.updateSearch}
          ref={this.availabilityRef}
        >
          <option value="">All Availabilities</option>
          <option value="current">Currently Available</option>
          <option value="future">Future Available</option>
        </select>
      </div>
    );
  }
}

export default Search;

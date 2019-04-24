import React, { Component } from "react";

class Search extends Component {
  updateSearch = selectedOption => {
    console.log("selected option", selectedOption.target.value);
    this.setState({ search: selectedOption /* .substring(0, 7) */ });
    this.props.searchChanged(selectedOption.target.value);
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

    return (
      <select className="RegistrationSelectCont" name="location" onChange={this.updateSearch}>
        <option value="">All Locations</option>
        {locations.map((item, i) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    );
  }
}

export default Search;

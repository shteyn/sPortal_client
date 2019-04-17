import React, { Component } from "react";
import Select from "react-select";

const options = [
  { value: "", label: "All" },
  { value: "berlin", label: "Berlin" },
  { value: "düsseldorf", label: "Düsseldorf" },
  { value: "köln", label: "Köln" },
  { value: "humburg", label: "Hamburg" }
];

class Search extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    selectedOption: null
  };
  updateSearch = selectedOption => {
    console.log("selected option", selectedOption.target.value);

    this.setState({ search: selectedOption /* .substring(0, 7) */ });
    this.props.searchChanged(selectedOption.target.value);
  };

  render() {
    //console.log("search props", this.props);
    const { allUsers } = this.props;
    const locations = [];
    allUsers.map(user => {
      if (locations.indexOf(user.location) < 0) {
        locations.push(user.location);
      }
    });
    //console.log("new locations", locations);

    return (
      <select name="location" onChange={this.updateSearch}>
        <option value="">All Locations</option>
        {locations.map((item, i) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    );
  }
}

export default Search;

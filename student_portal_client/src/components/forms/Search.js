import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
const options = [
  { value: "", label: "All" },
  { value: "berlin", label: "Berlin" },
  { value: "düsseldorf", label: "Düsseldorf" },
  { value: "köln", label: "Köln" },
  { value: "humburg", label: "Hamburg" }
];

class Search extends Component {
  state = {
    selectedOption: null
  };
  updateSearch = selectedOption => {
    this.setState({ search: selectedOption /* .substring(0, 7) */ });
    this.props.searchChanged(selectedOption.value);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        className="selectFilter"
        value={selectedOption}
        onChange={this.updateSearch}
        options={options}
      />
    );
  }
}

export default Search;

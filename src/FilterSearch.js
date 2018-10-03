import React, { Component } from "react";

class FilterSearch extends Component {
  render() {
    return (
      <th scope="col">
        <input
          ref={i => {
            this.newArticle = i;
          }}
          type="text"
          placeholder="Filter artikelen"
          className="form-control"
          id="newItemInput"
          onChange={e => this.props.onFilterSearchChange(e)}
        />
      </th>
    );
  }
}

export default FilterSearch;

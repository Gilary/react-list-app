import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <tr>
        <td colSpan="6">
          <form className="form-inline">
            <input
              ref={i => {
                this.newArticle = i;
              }}
              type="text"
              placeholder="zoek artikelen"
              className="form-control"
              id="newItemInput"
              onChange={e => this.props.onSearchChange(e)}
            />
            <button
              onClick={e => this.props.getArticleHits(e)}
              type="button"
              className="btn btn-add"
            >
              search
            </button>
          </form>
        </td>
      </tr>
    );
  }
}

export default Search;

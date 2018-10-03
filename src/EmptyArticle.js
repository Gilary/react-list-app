import React, { Component } from "react";

class EmptyArticle extends Component {
  render() {
    return (
      <tr>
        <td colSpan="6" className="text-center">
          <button
            onClick={() => this.props.addEmptyArticle()}
            type="button"
            className="btn btn-add"
          >
            + Toevoegen leeg artikel
          </button>
        </td>
      </tr>
    );
  }
}

export default EmptyArticle;

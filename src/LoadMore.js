import React, { Component } from "react";

class LoadMore extends Component {
  render() {
    return (
      <tr>
        <td colSpan="6" className="text-center">
          {this.props.visible < this.props.hits.length && (
            <button
              onClick={this.loadMore}
              type="button"
              className="btn btn-add"
            >
              ...laad meer
            </button>
          )}
        </td>
      </tr>
    );
  }
}

export default LoadMore;

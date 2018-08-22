import React, { Component } from "react";
class ArticleData extends Component {
  render() {
    const list = this.state.articles.filter(i =>
      i.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    return list.map(i => {
      return (
        <tr key={i.objectID}>
          <td key={i.title}>
            <a href={i.url}>{i.title}</a>
          </td>
          <td key={i.author}>{i.author}</td>
          <td key={i.num_comments}>{i.num_comments}</td>
          <td key={i.points}>{i.points}</td>
          <td key={i.objectID}>{i.objectID}</td>
          <td>
            <button
              onClick={e => this.removeArticle(i)}
              type="button"
              className="btn btn-danger btn-right"
            >
              Verwijder
            </button>
          </td>
        </tr>
      );
    });
  }
}
export default ArticleData;

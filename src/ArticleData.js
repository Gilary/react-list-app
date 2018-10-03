import React, { Component } from "react";

class ArticleData extends Component {
  render() {
    const list = this.props.hits.filter(i =>
      i.title.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    );
    return list.slice(0, this.props.visible).map(i => {
      //slice nog bewerken
      // if (list//(this.props.searchTerm) === null // error) {
      //   return (
      //     <tr>
      //       <td colSpan="6">lala</td>
      //     </tr>
      //   );
      // } else {
      return (
        <tr className="dataBruh" key={i.objectID}>
          <td key={i.title}>
            <a href={i.url}>{i.title}</a>
          </td>
          <td key={i.author}>{i.author}</td>
          <td key={i.num_comments}>{i.num_comments}</td>
          <td key={i.points}>{i.points}</td>
          <td key={i.objectID}>{i.objectID}</td>
          <td>
            <button
              onClick={e => this.props.removeArticle(i)}
              type="button"
              className="btn btn-danger btn-right"
            >
              Verwijder
            </button>
          </td>
        </tr>
      );
      // }
    });
  }
}
export default ArticleData;

/* als niet meer werkt in app :) 
 // const list = this.state.hits.filter(i =>
 //   i.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
{list.slice(0, this.state.visible).map(hits => {
              //slice nog bewerken
              // if (error) {
              //   return (
              //     <tr>
              //       <td colSpan="6">lala</td>
              //       {console.log("bla")}
              //     </tr>
              //   );
              // } else {
              return (
                <tr key={hits.objectID}>
                  <td key={hits.title}>
                    <a href={hits.url}>{hits.title}</a>
                  </td>
                  <td key={hits.author}>{hits.author}</td>
                  <td key={hits.num_comments}>{hits.num_comments}</td>
                  <td key={hits.points}>{hits.points}</td>
                  <td key={hits.objectID}>{hits.objectID}</td>
                  <td>
                    <button
                      onClick={e => this.removeArticle(hits)}
                      type="button"
                      className="btn btn-danger btn-right"
                    >
                      Verwijder
                    </button>
                  </td>
                </tr>
              );
              // }
            })} */

import React, { Component } from "react";
import "./App.css";
//import Fetcher from "./Fetcher.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      visible: 5,
      message: "",
      searchTerm: ""
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(prev => {
      return { visible: prev.visible + 5 };
    });
  }
  componentDidMount() {
    this.getArticleHits();
  }

  getArticleHits() {
    const articles = "https://hn.algolia.com/api/v1/search_by_date?tags=story";

    fetch(articles)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits })); //.then(articles => this.setState({ articles })); //articles:articles.articles or articles
    // .catch(error => {
    //   console.error(error);
    //   this.setState({
    //     error:true
    //   });
    // });
  }

  // addArticle(e) {
  //   e.preventDefault();
  //   const { articles } = this.state;
  //   const newArticle = this.newArticle.value;
  //   const isOnList = articles.includes(newArticle);

  //   if (isOnList) {
  //     this.setState({
  //       message: "Dit artikel staat al op de lijst"
  //     })
  //   } else {
  //     newArticle !== "" && this.setState({
  //       articles: [...this.state.articles, newArticle],
  //       message: ''
  //     })
  //   }

  //   this.addForm.reset();
  // }

  addEmptyArticle = () => {
    this.setState({
      hits: [
        ...this.state.hits,
        {
          title: "Empty",
          url: "Empty",
          author: "empty",
          num_comments: 0,
          points: 0,
          objectID: 0,
          id: 12
        }
      ]
    });
  };

  removeArticle(i) {
    const newArticles = this.state.hits.filter(hit => {
      return hit !== i;
    });
    this.setState({
      hits: [...newArticles]
    });
  }

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    //const { hits/articles } = this.state;
    const list = this.state.hits.filter(i =>
      i.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    return (
      // <div className="table-responsive">
      //   <form ref={(i) => { this.addForm = i }} className="form-inline" onSubmit={(e) => { this.addArticle(e) }}>
      //     <div className="form-group">
      //       <label className="sr-only" htmlFor="articleInput"></label>
      //       <input ref={(i) => { this.newArticle = i }} type="text" placeholder="Article toevoegen" className="form-control" id="articleInput" />
      //     </div>
      //     <button type="submit" className="btn btn-success">Toevoegen</button>
      //   </form>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <td colSpan="6" className="text-center">
                <button
                  onClick={() => this.addEmptyArticle()}
                  type="button"
                  className="btn btn-add"
                >
                  + Toevoegen leeg artikel
                </button>
              </td>
            </tr>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Comments</th>
              <th scope="col">Points</th>
              <th scope="col">Archive</th>
              {
                <th scope="col">
                  <input
                    ref={i => {
                      this.newArticle = i;
                    }}
                    type="text"
                    placeholder="zoek artikelen"
                    className="form-control"
                    id="newItemInput"
                    onChange={e => this.onSearchChange(e)}
                  />
                </th>
              }
            </tr>
          </thead>
          <tbody>
            {list.slice(0, this.state.visible).map(hits => {
              //slice nog bewerken
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
            })}
            <tr>
              <td colSpan="6" className="text-center">
                {this.state.visible < this.state.hits.length && (
                  <button
                    onClick={this.loadMore}
                    type="button"
                    className="btn btn-add"
                  >
                    ...load more
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;

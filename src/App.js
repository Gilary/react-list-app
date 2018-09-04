import React, { Component } from "react";
import "./App.css";
//import Search from "./Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      visible: 5,
      error: false,
      message: "",
      searchTerm: "Foo"
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
    const articles = `https://hn.algolia.com/apkli/v1/search?query=${
      this.state.searchTerm
    }`;

    fetch(articles)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits })) //.then(articles => this.setState({ articles })); //articles:articles.articles or articles
      .catch(error => {
        console.error(error);
        this.setState({
          error: true
        });
      });
  }
  //<---article toevoegen--->
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
  //<---article toevoegen--->

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

  onFilterSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  // filterList() {
  //   this.state.hits.filter(i =>
  //     i.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  //   );
  // }
  render() {
    console.log(this.state.hits);
    //const { hits/articles } = this.state;
    const { error } = this.state;
    const list = this.state.hits.filter(i =>
      i.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    // if (error) {
    //   return (
    //     <div>
    //       <a>Oepss.. Something went wrong :(</a>
    //     </div>
    //   );
    // }
    if (error) {
      return (
        <div className="content">
          <div>
            <h1>Oeps... er is iets wrong</h1>
            <h2>het lijkt erop dat er geen data wordt opgehaald :(</h2>
            <button
              //onClick={moet.nog.komen}
              type="button"
              className="btn btn-add"
              id="pulse-button"
            >
              ga naar de website
            </button>
          </div>
        </div>
      );
    }
    return (
      //<---article toevoegen--->
      // <div className="table-responsive">
      //   <form ref={(i) => { this.addForm = i }} className="form-inline" onSubmit={(e) => { this.addArticle(e) }}>
      //     <div className="form-group">
      //       <label className="sr-only" htmlFor="articleInput"></label>
      //       <input ref={(i) => { this.newArticle = i }} type="text" placeholder="Article toevoegen" className="form-control" id="articleInput" />
      //     </div>
      //     <button type="submit" className="btn btn-success">Toevoegen</button>
      //   </form>
      //<---article toevoegen--->
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            {/*<---lege article toevoegen--->
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
            <---lege article toevoegen---> */}
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
                    onChange={e => this.onSearchChange(e)}
                  />
                  <button
                    onClick={() => this.getArticleHits()}
                    type="button"
                    className="btn btn-add"
                  >
                    search
                  </button>
                </form>
              </td>
            </tr>
            {/*<--- search/filter eigen component --->
             <Search
              onSearchChange={this.onSearchChange}
              getArticleHits={this.getArticleHits}
            /> 
            <--- search/filter eigen component --->*/}
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
                    placeholder="Filter artikelen"
                    className="form-control"
                    id="newItemInput"
                    onChange={e => this.onFilterSearchChange(e)}
                  />
                </th>
              }
            </tr>
          </thead>
          <tbody>
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

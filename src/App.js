import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import ArticleData from "./ArticleData";
import FilterSearch from "./FilterSearch";
//import _ from "lodash";
//import LoadMore from "./LoadMore";
//import EmptyArticle from "./EmptyArticle";
//import AddArticle from "./AddArticle";

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
    // this.onSearchChange = _.debounce(this.onSearchChange.bind(this), 1000);
    // this.getArticleHits = _.debounce(this.getArticleHits.bind(this), 1000);
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 5 };
    });
  };

  // componentWillMount() {
  //   localStorage.getItem("artikel") && this.setState({
  //     artikel: JSON.parse(localStorage.localStorage.getItem("artikel"))
  //   })
  // }

  componentDidMount() {
    //if( localStorage.getItem("artikel")) {
    this.getArticleHits();
    // } else{
    //  console.log("gebruik data van localStorage");
    // }
  }

  getArticleHits = () => {
    //e.preventDefault();

    // const { value } = this.input;

    // if (value === '') {
    //   return;
    // }

    // const cachedHits = localStorage.getItem(value);
    // if (cachedHits) {
    //   this.setState({ hits: JSON.parse(cachedHits) });
    //   return;
    // }

    const articles = `https://hn.algolia.com/api/v1/search?query=${
      this.state.searchTerm
    }`;

    fetch(articles)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits })) //.then(articles => this.setState({ articles })); //articles:articles.articles or articles
      // .then(result => this.onResult(result, value))
      .catch(error => {
        console.error(error);
        this.setState({
          error: true
        });
      });
  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("artikel", JSON.stringify(nextState.hits));
    localStorage.setItem("artikelDate", Date.now());
  }

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

  removeArticle = i => {
    const newArticles = this.state.hits.filter(hit => {
      return hit !== i;
    });
    this.setState({
      hits: [...newArticles]
    });
  };

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  // onSearchChange = _.debounce(e => {
  //   this.setState({ searchTerm: e.target.value });
  // }, 1000);
  // cacheData(){
  //   const saveData = document.querySelector("dataBruh");
  //   saveData.addEventListener("load", function(){
  //     localStorage.setItem("hits", hits.value);
  //     hitsDisplayCheck();
  //   })
  // }

  // hitsDisplayCheck(){
  //   if(loacalStorage.getItem("hits")){
  //     let hits= localStorage.getItem("hits");

  //   }
  // }

  // onResult = (result, key) => {
  //   localStorage.setItem(key, JSON.stringify(result.hits));
  //   this.setState({ hits: result.hits });
  // }

  onFilterSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { error } = this.state;
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
      /* <AddArticle addArticle={this.addArticle} /> */
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            {/* <EmptyArticle addEmptyArticle={this.addEmptyArticle} /> */}
            <Search
              onSearchChange={this.onSearchChange}
              getArticleHits={this.getArticleHits}
              //input={this.input}
              ref={node => (this.input = node)}
            />
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Comments</th>
              <th scope="col">Points</th>
              <th scope="col">Archive</th>
              <FilterSearch onFilterSearchChange={this.onFilterSearchChange} />
            </tr>
          </thead>
          <tbody>
            <ArticleData
              hits={this.state.hits}
              searchTerm={this.state.searchTerm}
              visible={this.state.visible}
              removeArticle={this.removeArticle}
            />
            {/* werkt nog niet <LoadMore
              loadMore={this.LoadMore}
              visible={this.state.visible}
              hits={this.state.hits}
            /> */}
            <tr>
              <td colSpan="6" className="text-center">
                {this.state.visible < this.state.hits.length && (
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
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;

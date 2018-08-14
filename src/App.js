import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: "React",
          url: "https://facebook.github.io/react/",
          author: "Jordan Walke",
          num_comments: 3,
          points: 4,
          objectID: 0
        },
        {
          title: "Redux",
          url: "https://github.com/reactjs/redux",
          author: "Dan Abramov, Andrew Clark",
          num_comments: 2,
          points: 5,
          objectID: 1
        }
      ],
      message: "",
      searchTerm: ""
    }
  }

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

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
      articles: [
        ...this.state.articles,
        {
          title: "Empty",
          url: "Empty",
          author: "empty",
          num_comments: 0,
          points: 0,
          objectID: 0
        }
      ],
    });
  };
  removeArticle(i) {
    const newArticles = this.state.articles.filter(article => {
      return article !== i;
    })
    this.setState({
      articles: [...newArticles]
    })
  }

  render() {
    //const { articles } = this.state;
    const list = this.state.articles.filter(i =>
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
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Comments</th>
              <th scope="col">Points</th>
              <th scope="col">Archive</th>
              {<th scope="col"><input
                ref={i => {
                  this.newArticle = i;
                }}
                type="text"
                placeholder="zoek artikelen"
                className="form-control"
                id="newItemInput"
                onChange={e => this.onSearchChange(e)}
              /></th>}
            </tr>
          </thead>
          <tbody>
            {
              list.map(i => {
                return (
                  <tr key={i.objectID}>
                    <td key={i.title}>
                      <a href={i.url}>{i.title}</a>
                    </td>
                    <td key={i.author}>{i.author}</td>
                    <td key={i.num_comments}>{i.num_comments}</td>
                    <td key={i.points}>{i.points}</td>
                    <td key={i.objectID}>{i.objectID}</td>
                    <td><button onClick={(e) => this.removeArticle(i)} type="button" className="btn btn-danger btn-right">Verwijder</button></td>
                  </tr>

                )
              })
            }
            <tr>
              <td colSpan="6" className="text-center">
                <button
                  onClick={() => this.addEmptyArticle()}
                  type="button"
                  className="btn btn-add">
                  + Toevoegen leeg artikel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div >
    );
  }
}

export default App;
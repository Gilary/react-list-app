import React, { Component } from "react";

class LoadMore extends Component {
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
  render() {
    //return (
    //<---article toevoegen--->
    //   <form ref={(i) => { this.addForm = i }} className="form-inline" onSubmit={(e) => { this.addArticle(e) }}>
    //     <div className="form-group">
    //       <label className="sr-only" htmlFor="articleInput"></label>
    //       <input ref={(i) => { this.newArticle = i }} type="text" placeholder="Article toevoegen" className="form-control" id="articleInput" />
    //     </div>
    //     <button type="submit" className="btn btn-success">Toevoegen</button>
    //   </form>
    //<---article toevoegen--->
    //);
  }
}

export default LoadMore;

import React, { Component } from 'react';
import ArticleData from "./ArticleData.js"

class Content extends Component {
    render() {
        //const { articles } = this.state;
        // const list = this.state.articles.filter(i =>
        //     i.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        // );
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
                    <thead className="thead-light">
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
                                placeholder="text"
                                className="form-control"
                                id="newItemInput"
                                onChange={e => this.onSearchChange(e)}
                            /></th>}
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody className="table-article">
                        <ArticleData articles={this.state.articles} />
                    </tbody>
                    <button
                        onClick={() => this.addEmptyArticle()}
                        type="button"
                        className="btn btn-success btn-right"
                    >
                        + Toevoegen leeg artikel
            </button>
                </table>
            </div >
        );
    }
}
export default Content;

import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle } from "../actions/index";

const mapStateToProps = state => {
  console.log("List says: ", state);
  return { articles: state.articles };
};

function mapDispatchToProps(dispatch) {
  return {
    removeArticle: index => dispatch(removeArticle(index))
  };
}

class ConnectedList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = indexToRemove => {
    this.props.removeArticle(indexToRemove);
  };
  render() {
    return (
      <ul>
        {this.props.articles.map((el, index) => (
          <li key={"Article" + index}>
            {el.title}{" "}
            <button onClick={() => this.handleDelete(index)}>Remove Me!</button>
          </li>
        ))}
      </ul>
    );
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;

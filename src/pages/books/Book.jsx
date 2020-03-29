import React from "react";
import { Link } from "react-router-dom";
class Book extends React.Component {
  render() {
    return (
      <div>
        <h1>Book</h1>
        <Link to="/book/webbook">webbook</Link>--
        <Link to="/book/javabook">javabook</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Book;

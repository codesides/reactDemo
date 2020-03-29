import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Breadcrumb } from "antd";
import "./styles.css";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink exact strict to="/mine">
              Mine
            </NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink strict to="/detail/1/codesides">
              Detail
            </NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink strict to="/book">
              Books
            </NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

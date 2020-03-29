import React from "react";
import { Button } from "antd";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    fetch("/api/list")
      .then(response => response.json())
      .then(res => {
        console.log("====================================");
        console.log(res);
        this.setState({
          list: res
        });
        console.log("====================================");
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { list } = this.state;
    return (
      <div>
        我是nav组件
        <Button type="primary">我是button</Button>
        {list.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </div>
    );
  }
}

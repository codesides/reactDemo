import React from "react";
import { Input } from "antd";
import { Prompt } from "react-router-dom";

export default class Home extends React.Component {
  state = {
    name: ""
  };
  render() {
    return (
      <div>
        <Prompt when={!!this.state.name} message="确定离开吗" />
        <Input
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
      </div>
    );
  }
}

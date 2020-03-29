import React from "react";
import querystring from "querystring";
import { Button } from "antd";

class Detail extends React.Component {
  componentDidMount() {
    console.log("====================================");
    console.log(this.props);
    console.log("====================================");
    //获取传递参数 detail?id=1&name=codesides
    //方法一 URLSearchParams
    const params = new URLSearchParams(this.props.location.search);
    console.log(params);
    console.log(params.get("id"));
    //方法二，需引入 querystring
    const value = querystring.parse(this.props.location.search);
    console.log(value);
  }
  _goHome = () => {
    this.props.history.push("/home");
  };
  render() {
    return (
      <div>
        <p>
          Detail:{this.props.match.params.id}---{this.props.match.params.name}
        </p>
        <Button onClick={this._goHome}>回home</Button>
      </div>
    );
  }
}

export default Detail;

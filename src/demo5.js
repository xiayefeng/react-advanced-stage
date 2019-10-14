import React, { Component } from "react";

// 属性代理 用于预先 将业务组件，进行数据的封装，便于我们 获取数据
// 反向继承 交互的封装
const loading = Com => {
  class LoadingComponet extends Com {
    showLoading() {
      console.log("loading");
    }
    hideLoading() {
      console.log("hide");
    }
  }
  return LoadingComponet;
};

@loading
class User extends Component {
  render() {
    return <div>user</div>;
  }
  componentDidMount() {
    this.showLoading();
    setTimeout(() => {
      this.hideLoading();
    }, 500);
  }
}

class App extends Component {
  render() {
    return <User />;
  }
}

export default App;

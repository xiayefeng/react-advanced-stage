import React, { Component } from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import Friend from "./views/friend";
import Post from "./views/post";
import Action from "./views/action";

@inject("friend", "post")
@observer
class App extends Component {
  render() {
    return (
      <div>
        <h3>好友列表</h3>
        <Friend />
        <h3>全部说说</h3>
        <Post />

        <Action />
      </div>
    );
  }

  componentDidMount() {}
}

export default App;

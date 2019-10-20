import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("friend")
@observer
class Post extends Component {
  render() {
    const { friend } = this.props;
    return (
      <div>
        {friend.friendPost.map(item => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Post;

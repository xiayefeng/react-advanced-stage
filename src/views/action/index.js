import React, { Component } from "react";
import { observable } from "mobx";
import { inject, observer } from "mobx-react";

@inject("post")
@observer
class Action extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <div>
          <input
            placeholder="title"
            value={post.addForm.title}
            onChange={e => (post.addForm.title = e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="content"
            value={post.addForm.content}
            onChange={e => (post.addForm.content = e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="friendId"
            value={post.addForm.friendId}
            onChange={e =>
              (post.addForm.friendId = parseInt(e.target.value || 0))
            }
          />
        </div>
        <button
          onClick={() => {
            post.handleAdd();
          }}
        >
          add
        </button>
      </div>
    );
  }
  componentWillUnmount() {
    this.props.post.clear();
  }
}

export default Action;

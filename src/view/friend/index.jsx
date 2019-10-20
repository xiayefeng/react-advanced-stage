import React, { Component } from "react";
import { connect } from "react-redux";

import { addFriend, delFriend } from "../../action/friend";
import * as styles from "./home.scss";

class Friend extends Component {
  state = {
    value: ""
  };
  render() {
    const { friendList } = this.props;
    const { value } = this.state;
    return (
      <div className={styles.wrap}>
        <input
          value={value}
          onChange={e => {
            this.setState({
              value: e.target.value
            });
          }}
        />
        <button
          onClick={() => {
            addFriend({
              name: value,
              age: parseInt(9 * Math.random()) + 20,
              sex: friendList.length % 2 ? "man" : "girl"
            });
            this.setState({
              value: ""
            });
          }}
        >
          添加
        </button>
        {friendList.map((item, idx) => (
          <p key={item.name}>
            {item.name} <button onClick={() => delFriend(idx)}>删除</button>
          </p>
        ))}
      </div>
    );
  }
}

export default connect(state => {
  return {
    friendList: state.friend.list
  };
})(Friend);

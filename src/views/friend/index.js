import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("friend")
@observer
class Friend extends Component {
  render() {
    const { friend } = this.props;
    return (
      <div>
        {friend.list.map(item => (
          <span
            key={item.id}
            onClick={() => {
              friend.activeId = item.id;
            }}
          >
            {item.name} |
          </span>
        ))}
      </div>
    );
  }
}

export default Friend;

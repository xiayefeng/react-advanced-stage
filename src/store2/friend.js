import { observable, computed } from "mobx";
import post from "./post";

class Friend {
  @observable list = [
    {
      name: "ryan",
      id: 1
    },
    {
      name: "xiaoming",
      id: 2
    },
    {
      name: "xiaohua",
      id: 3
    }
  ];
  @observable activeId = 0;
  @computed
  get friendPost() {
    return post.list.filter(item => item.friendId === this.activeId);
  }
}

const friend = new Friend();

export default friend;

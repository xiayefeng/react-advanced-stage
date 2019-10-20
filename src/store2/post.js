import { observable, action } from "mobx";

const addForm = {
  title: "",
  content: "",
  friendId: ""
};

class Post {
  @observable addForm = {
    ...addForm
  };
  @observable list = [
    {
      title: "hello ryan",
      content: "hellor ryan post 1",
      id: 1,
      friendId: 1
    },
    {
      title: "hello ryan1",
      content: "hellor ryan post 2",
      id: 2,
      friendId: 1
    },
    {
      title: "hello ryan2",
      content: "hellor ryan post 3",
      id: 3,
      friendId: 1
    }
  ];

  @action.bound
  handleAdd() {
    let arr = this.list.slice();
    this.addForm.id = arr.length + 1;
    arr[arr.length] = this.addForm;
    this.list = arr;
    // arr.push(...this.addForm)
    // this.list = arr
  }

  @action.bound
  clear() {
    this.addForm = {
      ...addForm
    };
  }
}
const post = new Post();
export default post;

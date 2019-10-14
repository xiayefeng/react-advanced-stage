import React, { Component } from "react";

const inject = key => Com => {
  class InjectComponet extends Component {
    constructor(props) {
      super(props);
      this.state = {
        [key]: store[key]
      };
    }
    render() {
      return <Com {...this.state} />;
    }

    componentDidMount() {
      let that = this;
      window.store = new Proxy(store, {
        get: function(target, key, receiver) {
          console.log(`getting ${key}`);
          return Reflect.get(target, key, receiver);
        },
        set: function(target, key, value, receiver) {
          console.log(`setting ${key}`);
          that.setState({
            [key]: value
          });
          return Reflect.set(target, key, value, receiver);
        }
      });
    }
  }
  return InjectComponet;
};

const store = {
  name: "ryan",
  age: 10
};

@inject("name")
class User extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

class App extends Component {
  render() {
    return <User />;
  }
}

export default App;

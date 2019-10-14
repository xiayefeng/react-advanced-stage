import React, { Component, useState, useEffect } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "class"
    };
  }
  componentDidMount() {
    console.log("hello");
  }
  componentDidUpdate(prevProps, prevState) {}
  shouldComponentUpdate() {}
  componentWillUnmount() {}
}

const App = props => {
  let [time, setTime] = useState(0);
  let [age, setAge] = useState(20);

  useEffect(() => {
    console.log("hello");
    return () => {
      console.log("state clear");
    };
  }, [age]);

  return (
    <div>
      hello world {time} {age}
      <button onClick={e => setTime(time + 1)}>add</button>
      <button onClick={e => setAge(age - 1)}>minus</button>
    </div>
  );
};

export default App;

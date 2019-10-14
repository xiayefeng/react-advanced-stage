import React, { Component, useState, useEffect } from "react";

const Action = props => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button
        onClick={e => {
          props.onAdd(value);
          setValue("");
        }}
      >
        add
      </button>
    </div>
  );
};

const List = props => {
  return (
    <div>
      {props.data.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button>del</button>
        </div>
      ))}
    </div>
  );
};

const App = props => {
  const [data, setData] = useState([
    { name: "react", id: 1 },
    { name: "vue", id: 2 }
  ]);
  return (
    <div>
      <Action
        onAdd={name => {
          console.log(name);
          let arr = data.slice();
          arr.push({
            name,
            id: arr.length + 1
          });
          setData([...arr]);
        }}
      />
      <List data={data} />
    </div>
  );
};
export default App;

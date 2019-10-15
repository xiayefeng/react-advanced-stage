import React, { Component, useState, useEffect } from "react";
import "./todo-list.scss";

const Action = props => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value.trim())}
        onKeyUp={e => {
          if (e.which === 13) {
            value && props.onAdd(value);
            setValue("");
          }
        }}
      />
      <button
        onClick={e => {
          value && props.onAdd(value);
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
          <span className="item">{item.name}</span>
          <button
            onClick={e => {
              props.onDel(item.id);
            }}
          >
            del
          </button>
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
            id: data.length > 0 ? data.slice(-1)[0].id + 1 : 1
          });
          setData(arr);
        }}
      />
      <List
        data={data}
        onDel={id => {
          console.log(id);
          for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
              data.splice(i, 1);
              break;
            }
          }
          setData([...data]);
        }}
      />
    </div>
  );
};
export default App;

import React, { useState, useEffect } from "react";

const useTitleHook = title => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "App";
    };
  });
};

const App = () => {
  let [title, setTitle] = useState("hello");
  useTitleHook(title);

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </div>
  );
};

export default App;

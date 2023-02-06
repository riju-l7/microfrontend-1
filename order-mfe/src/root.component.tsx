import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";


export default function Root(props) {

  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(JSON.parse(window.sessionStorage.getItem("count")));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("count", '' +count);
  }, [count]);



  return <section>{props.name} is mounted!
  This is order app

  <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
    </div>
  </section>;
}


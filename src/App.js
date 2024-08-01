import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import SearchUsers from "./UserList";
import SearchTodos from "./TodoList";

const App = () => {
  return (
    <div className="">
      <h1>HOC</h1>
      <div className="section">
        <div>
          {" "}
          <SearchUsers />
        </div>
        <div>
          <SearchTodos />
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = days[new Date().getDay()];

  const addTodo = () => {
    const trimmedTodo = todo.trim(); 

    if (!trimmedTodo) {
      alert("Please enter a valid todo!"); 
      return;
    }

    if (toDos.some((item) => item.text.toLowerCase() === trimmedTodo.toLowerCase())) {
      alert("This todo already exists!"); 
      return;
    }

    setTodos([...toDos, { id: Date.now(), text: trimmedTodo, status: false }]);
    setTodo(""); 
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>It's {currentDay}</h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder=" Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={(e) => {
                  setTodos(
                    toDos.map((todo) =>
                      todo.id === obj.id ? { ...todo, status: e.target.checked } : todo
                    )
                  );
                }}
                checked={obj.status}
                type="checkbox"
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={() => setTodos(toDos.filter((todo) => todo.id !== obj.id))} className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

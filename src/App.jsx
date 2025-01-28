import React, { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = days[new Date().getDay()];
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2> it's {currentDay} 🌝 ☕</h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setTodos([...toDos, { id: Date.now(), text: todo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={(e) => {
                    setTodos(
                      toDos.map((todo) => {
                        if (todo.id === obj.id) {
                          return { ...todo, status: e.target.checked };
                        }
                        return todo;
                      })
                    );
                  }}
                  checked={obj.status}
                  type="checkbox"
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => setTodos(toDos.filter((todo) => todo.id !== obj.id))}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
        {toDos
          .filter((obj) => obj.status)
          .map((obj) => (
            <h1 key={obj.id}>{obj.text}</h1>
          ))}
      </div>
    </div>
  );
}

export default App;

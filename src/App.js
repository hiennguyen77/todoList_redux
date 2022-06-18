import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AddTodo } from "./Components/AddTodo";
import { Todo } from "./Components/Todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />}>
          <Route path="add" element={<AddTodo />} />
          <Route path="/edit/:todoId" element={<AddTodo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import "./Todo.scss";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../Redux/Actions";
import { useState } from "react";

import { todoListSelector } from "../Redux/Selector";
export const Todo = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [editTodo, setEditTodo] = useState([]);
  const navigate = useNavigate();

  const todo_list = useSelector(todoListSelector);

  const dispatch = useDispatch();
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id: id }));
  };

  const handleUpdateTodo = (todo) => {
    const editTodo = todo_list.find((x) => x.id === todo.id);
    setEditTodo(editTodo);
    const editUrl = `edit/${todo.id}`;

    navigate(editUrl);
    setIsEdit(true);
  };

  const handleComplete = (id) => {
    dispatch(
      completeTodo({
        id: id,
      })
    );
  };

  return (
    <>
      <div className="todo_wrap">
        <Outlet context={[isEdit, setIsEdit, editTodo]} />
        <div className="todo_heading">
          <h4>Todo-app with Redux</h4>
          <Link className="add_link" to="add">
            <button title="Thêm todo" onClick={() => setIsEdit(false)}>
              <p>Add Todo</p>
            </button>
          </Link>
        </div>

        <div className="todo_list">
          {todo_list.map((todo, index) => (
            <div key={index} className="todo_item">
              <h4
                title={todo.complete ? "Hoàn tác" : "Gạch bỏ"}
                className={todo.complete ? "complete_todo" : ""}
                onClick={() => handleComplete(todo.id)}
              >
                {todo.name ? todo.name : "No Todo ........"}
              </h4>
              <div>
                <button
                  title="Sửa"
                  onClick={() => handleUpdateTodo(todo)}
                  className="edit_btn"
                >
                  <Link className="edit_link" to="edit">
                    <p>Edit</p>
                  </Link>
                </button>
                <button
                  title="Xóa"
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="delete_btn"
                >
                  <p>Delete</p>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          {todo_list.length > 0 ? (
            <h3>Todo Item: {todo_list.length} </h3>
          ) : (
            <h3 style={{ color: "red" }}>Please! Add todo... </h3>
          )}
        </div>
      </div>
    </>
  );
};

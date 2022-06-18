import "./AddTodo.scss";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../Redux/Actions";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AddTodo = () => {
  const [isEdit, setIsEdit, editTodo] = useOutletContext();

  const initTodo = isEdit ? editTodo.name : "";
  const [nameText, setNameText] = useState(initTodo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuidv4(),
        name: nameText,
        complete: false,
      })
    );

    setNameText("");
    navigate("/");
  };

  const handleEditTodo = (e) => {
    e.preventDefault();

    dispatch(
      updateTodo({
        name: nameText,
        id: editTodo.id,
        complete: editTodo.complete,
      })
    );
    setIsEdit(false);

    navigate("/");
  };

  // console.log(editTodo);
  return (
    <>
      <div className="addTodo_wrap">
        <form>
          <input
            value={nameText}
            onChange={(e) => setNameText(e.target.value)}
            placeholder="Add todo..."
            size={73}
          />
          {isEdit ? (
            <Link className="submit_btn_link" to="/">
              <button
                title="Cập nhật"
                onClick={handleEditTodo}
                className="submit_btn"
              >
                <p>Update</p>
              </button>
            </Link>
          ) : (
            <Link className="submit_btn_link" to="/">
              <button
                title="Thêm"
                onClick={handleAddTodo}
                className="submit_btn"
              >
                <p>Submit</p>
              </button>
            </Link>
          )}
          <Link className="cancel_link" to="/">
            <button title="Trở về" className="cancel_btn">
              <p>Cancel</p>
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

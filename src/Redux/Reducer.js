const initState = {
  todoList: [],
};

const rootReducer = (state = initState, action) => {
  console.log(state, action);

  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case "DELETE_TODO":
      const todo = [...state.todoList];
      const newTodo = todo.filter((todo) => todo.id !== action.payload.id);
      // console.log(newTodo);
      return {
        ...state,
        todoList: newTodo,
      };

    case "UPDATE_TODO":
      const todoLists = [...state.todoList];
      const foundIndex = todoLists.findIndex(
        (todo) => todo.id === action.payload.id
      );

      console.log(foundIndex);

      if (foundIndex >= 0) {
        todoLists[foundIndex] = action.payload;
      }
      return {
        todoList: todoLists,
      };

    case "COMPLETE_TODO":
      const todo_Lists = [...state.todoList];
      const completeTodo = todo_Lists.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
      return {
        ...state,
        todoList: completeTodo,
      };

    default:
      console.log("not invalid");
      return state;
  }
};

export default rootReducer;

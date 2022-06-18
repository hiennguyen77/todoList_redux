export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: data,
  };
};
export const deleteTodo = (data) => {
  return {
    type: "DELETE_TODO",
    payload: data,
  };
};
export const updateTodo = (data) => {
  return {
    type: "UPDATE_TODO",
    payload: data,
  };
};
export const completeTodo = (data) => {
  return {
    type: "COMPLETE_TODO",
    payload: data,
  };
};

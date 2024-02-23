// Add to fo
export const addTodo = (text) => {
    return {
      type: "ADD_TASK",
      payload: {
        id: new Date().getTime(),
        text: text,
      },
    };
  };
  
  // Delete to do
  export const deleteTodo = (id) => {
    return {
      type: "DELETE_TASK",
      payload: id,
    };
  };
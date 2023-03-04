// actions.js
export const addTodo = (todo) => {
    return {
      type: "ADD_TODO",
      payload: todo,
    };
  };
  
  export const completeTodo = (index) => {
    return {
      type: "COMPLETE_TODO",
      payload: index,
    };
  };
  
  export const removeCompleted = () => {
    return {
      type: "REMOVE_COMPLETED",
    };
  };
  
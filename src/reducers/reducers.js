// reducers.js
const initialState = {
    todoList: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todoList: [...state.todoList, action.payload],
        };
      case "COMPLETE_TODO":
        const newTodoList = [...state.todoList];
        newTodoList[action.payload].completed = true;
        return {
          ...state,
          todoList: newTodoList,
        };
      case "REMOVE_COMPLETED":
        return {
          ...state,
          todoList: state.todoList.filter((todo) => !todo.completed),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  
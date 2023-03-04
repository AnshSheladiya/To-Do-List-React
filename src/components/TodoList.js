// TodoList.js
import React, { useState, useEffect } from 'react';

function TodoList() {
const [inputValue, setInputValue] = useState("");
const [todoList, setTodoList] = useState([]);

useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);
    
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  

const handleInputChange = (event) => {
setInputValue(event.target.value);
};

const handleAddTodo = () => {
if (inputValue.trim() !== "") {
setTodoList([...todoList, { task: inputValue, completed: false }]);
setInputValue("");
}
};

const handleCompleteTodo = (index) => {
const newTodoList = [...todoList];
newTodoList[index].completed = true;
setTodoList(newTodoList);
};

const handleRemoveCompleted = () => {
setTodoList(todoList.filter((todo) => !todo.completed));
};

return (
<div>
<h1>TODO List</h1>
<input type="text" value={inputValue} onChange={handleInputChange} />
<button onClick={handleAddTodo}>Add Todo</button>
<ul>
{todoList.map((todo, index) => (
<li key={index}>
<input
type="checkbox"
checked={todo.completed}
onChange={() => handleCompleteTodo(index)}
/>
<span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
{todo.task}
</span>
</li>
))}
</ul>
<button onClick={handleRemoveCompleted}>Remove Completed</button>
</div>
);
}

export default TodoList;
import React, { useState } from 'react';

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (inputValue.trim() === '') {
      return;
    }

    const newTask = {
      task: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };
  const deleteTask = (index) => {
    const updatedTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <input
        className="input-task"
        placeholder="Input an Item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="button-task" onClick={addTask}>
        <p>+</p>
      </button>
      <ul className="list-task">
        {tasks.map((item, index) => (
          <li key={index} className={`task ${item.completed ? 'done' : ''}`}>
            <p>{item.task}</p>
            <img
              src="./img/trash.png"
              alt="Delete-Tarefa"
              onClick={() => deleteTask(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

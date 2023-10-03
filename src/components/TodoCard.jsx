// TodoCard.js
import "./TodoCard.css";
import React from 'react';

const TodoCard = ({ task, onUpdate, onDelete }) => {
  return (
    <div className='card-container'>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Deadline: {task.deadline}</p>
      <button onClick={() => onUpdate(task)}>Update</button>
      <button onClick={() => onDelete(task)}>Delete</button>
    </div>
  );
};

export default TodoCard;

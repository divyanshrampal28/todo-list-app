import React, { useState } from 'react';
import "./TodoCard.css";
import open from '../assets/share.png';
import DetailsModal from './DetailsModal'; // Import the modal component

const TodoCard = ({ task, onUpdate, onDelete, onComplete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='card-container'>
      <div className="card-header">
        <h3>{task.title}</h3>
        <button onClick={handleOpenModal}><img src={open} alt="" /></button>
      </div>
      <p>Deadline: {task.deadline}</p>
      <button className="btn" onClick={() => onUpdate(task)}>Update</button>
      <button className="btn" onClick={() => onDelete(task)}>Delete</button>
      {task.completed === true ? <p>Completed</p> :
        <button className="btn" onClick={() => onComplete(task)}>Mark As Completed</button>}
      
      {/* Render the modal component */}
      {isModalOpen && (
        <DetailsModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          task={task}
        />
      )}
    </div>
  );
};

export default TodoCard;

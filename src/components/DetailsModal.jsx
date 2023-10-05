// DetailsModal.js
import React from 'react';
import Modal from 'react-modal';
import './DetailsModal.css'; // Import the CSS file

Modal.setAppElement('#root');

const DetailsModal = ({ isOpen, onRequestClose, task }) => {
  return (
    <div className='detail-container'>
        <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Task Details Modal"
      className="ModalContent" // Apply the ModalContent class
    >
      <h2>Task Details</h2>
      <h3>Title: {task.title}</h3>
      <p>Description: {task.description}</p>
      <p>Deadline: {task.deadline}</p>
      {/* Add more details as needed */}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
    </div>
  );
};

export default DetailsModal;

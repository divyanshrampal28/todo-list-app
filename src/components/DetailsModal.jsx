// DetailsModal.js
import React from 'react';
import Modal from 'react-modal';
import './DetailsModal.css'; // Import the CSS file
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(100%, 50%)',
    padding: '20px', // Added padding for better spacing
    borderRadius: '8px', // Added border radius for rounded corners
    boxShadow: '0 10px 25px rgba(11, 34, 44, 0.6)', // Added a subtle box shadow
    maxWidth: '400px', // Adjusted max width for responsiveness
    width: '100%', // Ensures the modal takes full width on smaller screens
    display: 'flex', // Added display flex
    flexDirection: 'column', // Added flex direction column
    
  },
};

Modal.setAppElement('#root');

const DetailsModal = ({ isOpen, onRequestClose, task }) => {
  return (
    <div className='detail-container'>
        <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onRequestClose}
      contentLabel="Task Details Modal"
      className="ModalContent" // Apply the ModalContent class
    >
   
        <h2>Task Details</h2>
        <h3>Title: {task.title}</h3>
        <p>Description</p>
        <div className='detail-description'>{task.description}</div>
        <p>Deadline: {task.deadline}</p>
        {/* Add more details as needed */}
        <button onClick={onRequestClose}>Close</button>
    </Modal>
    </div>
  );
};

export default DetailsModal;

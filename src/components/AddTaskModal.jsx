// AddTaskModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './AddTaskModal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px', // Added padding for better spacing
    borderRadius: '8px', // Added border radius for rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added a subtle box shadow
    maxWidth: '400px', // Adjusted max width for responsiveness
    width: '100%', // Ensures the modal takes full width on smaller screens
    display: 'flex', // Added display flex
    flexDirection: 'column', // Added flex direction column
    
  },
};


Modal.setAppElement('#root'); // Set the root element to be accessible by screen readers

const AddTaskModal = ({ isOpen, onRequestClose, onCreateTask, onUpdateTask, selectedTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    // Update the state with the selected task values when the modal is opened for update
    if (selectedTask) {
      setTitle(selectedTask.title || '');
      setDescription(selectedTask.description || '');
      setDeadline(selectedTask.deadline || '');
    }
  }, [selectedTask]);

  const handleCreateOrUpdateTask = () => {
    // Validate input fields
    if (title.trim() !== '' && description.trim() !== '' && deadline.trim() !== '') {
      const taskData = {
        title,
        description,
        deadline,
      };

      if (selectedTask) {
        // If selectedTask exists, it means we are updating an existing task
        onUpdateTask({ ...selectedTask, ...taskData });
      } else {
        // Otherwise, create a new task
        onCreateTask(taskData);
      }

      // Clear input fields
      setTitle('');
      setDescription('');
      setDeadline('');

      // Close the modal
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Add Task Modal"
    >
      <h2 className='modal-header'>{selectedTask ? 'Update Task' : 'Add Task'}
      <span
          className="close-icon"
          style={customStyles.closeIcon}
          onClick={onRequestClose}
        >
          &times;
        </span>
      </h2>
      <label className='modal-title'>Title:</label>
      <input className='task-name' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label className='modal-title'>Description:</label>
      <textarea className='task-description' value={description} onChange={(e) => setDescription(e.target.value)} />

      <label className='modal-title'>Deadline:</label>
      <input task='task-deadline' type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />

      <button className='create-task' onClick={handleCreateOrUpdateTask}>{selectedTask ? 'Update Task' : 'Create Task'}</button>
    </Modal>
  );
};

export default AddTaskModal;

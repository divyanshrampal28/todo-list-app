// AddTaskModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element to be accessible by screen readers

const AddTaskModal = ({ isOpen, onRequestClose, onCreateTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleCreateTask = () => {
    // Validate input fields
    if (title.trim() !== '' && description.trim() !== '' && deadline.trim() !== '') {
      // Create a new task object
      const newTask = {
        title,
        description,
        deadline,
      };

      // Call the parent component's function to create the task
      onCreateTask(newTask);

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
      onRequestClose={onRequestClose}
      contentLabel="Add Task Modal"
    >
      <h2>Add Task</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

      <label>Deadline:</label>
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />

      <button onClick={handleCreateTask}>Create Task</button>
    </Modal>
  );
};

export default AddTaskModal;

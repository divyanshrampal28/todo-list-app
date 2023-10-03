// TodoList.js
import './TodoList.css'
import React, { useState } from 'react';
import AddTaskModal from './AddTaskModal';
import TodoCard from './TodoCard';

const TodoList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setSelectedTask(null); // Reset selected task when opening the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleUpdateTask = (updatedTask) => {
    // Find the index of the task in the tasks array
    const index = tasks.findIndex((task) => task === selectedTask);

    // Update the task in the array
    setTasks((prevTasks) => [
      ...prevTasks.slice(0, index),
      updatedTask,
      ...prevTasks.slice(index + 1),
    ]);

    // Close the modal after updating the task
    handleCloseModal();
  };

  const handleDeleteTask = (taskToDelete) => {
    // Filter out the task to be deleted
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <button onClick={handleOpenModal}>Add Task</button>

      {/* Render tasks */}
      <div className='cards'>
        {tasks.map((task, index) => (
          <TodoCard
            key={index}
            task={task}
            onUpdate={(task) => {
              setSelectedTask(task);
              setIsModalOpen(true);
            }}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>

      {/* Modal for adding/updating tasks */}
      <AddTaskModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onCreateTask={handleCreateTask}
        onUpdateTask={handleUpdateTask}
        selectedTask={selectedTask}
      />
    </div>
  );
};

export default TodoList;

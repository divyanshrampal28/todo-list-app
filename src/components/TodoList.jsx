// TodoList.js
import './TodoList.css'
import React, { useEffect, useState } from 'react';
import AddTaskModal from './AddTaskModal';
import TodoCard from './TodoCard';

const TodoList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setSelectedTask(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateTask = (newTask) => {
    // Include the 'completed' key with a default value of false when creating a new task
    const taskWithCompletion = { ...newTask, completed: false };
    
    setTasks((prevTasks) => [...prevTasks, taskWithCompletion]);
  };

  const handleUpdateTask = (updatedTask) => {
    // Find the index of the task in the tasks array
    const index = tasks.findIndex((task) => task === selectedTask);

    // Update the task in the array, keeping the existing 'completed' value
    setTasks((prevTasks) => [
      ...prevTasks.slice(0, index),
      { ...updatedTask, completed: tasks[index].completed },
      ...prevTasks.slice(index + 1),
    ]);

    // Close the modal after updating the task
    handleCloseModal();
  };

  const handleDeleteTask = (taskToDelete) => {
    // Filter out the task to be deleted
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
  };

  useEffect(() => {
    if (tasks.length > 0){
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log(tasks);
    }
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(storedTasks);
    setTasks(storedTasks);
  }, []);

  const handleCompleteTask = (taskToMark) => {
    const updatedTasks = tasks.map((task) =>
      task === taskToMark ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='design-header'>
      <div className='floating-container'> 
            <button className='floating-button' onClick={handleOpenModal}>
                <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" fill='white'/>
                </svg>
            </button>
      </div>
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
            onComplete ={handleCompleteTask}
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

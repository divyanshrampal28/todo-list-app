import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
import AddTaskModal from './AddTaskModal';

function Upcoming() {
  
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(storedTasks);
    setTasks(storedTasks);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
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

  const handleCompleteTask = (taskToMark) => {
    const updatedTasks = tasks.map((task) =>
      task === taskToMark ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  useEffect(() => {
    if (tasks.length > 0){
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log(tasks);
    }
  }, [tasks]);

    return (
        <div>
      <div className='cards'>
        {tasks.map((task, index) =>
          task.completed === false ? (
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
          ) : (
            <React.Fragment key={index}></React.Fragment>
          )
        )}
      </div>
      <AddTaskModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onUpdateTask={handleUpdateTask}
        selectedTask={selectedTask}
      />
    </div>
    );
}

export default Upcoming;
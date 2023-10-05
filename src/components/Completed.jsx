import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard';

function Completed() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(storedTasks);
    setTasks(storedTasks);
  }, []);

  return (
    <div>
      <div className='cards'>
        {tasks.map((task, index) =>
          task.completed === true ? (
            <TodoCard key={index} task={task} />
          ) : (
            <React.Fragment key={index}></React.Fragment>
          )
        )}
      </div>
    </div>
  );
}

export default Completed;

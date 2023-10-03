// Sidebar.js
import './sidebar.css';
import React from 'react';

const Sidebar = ({ onSelectSection }) => {
  const tasks = ['Upcoming', 'Completed', 'Analytics' ]; // Add your sections
  const categories = ['All', 'Work', 'Personal', 'Shopping', 'Others'];

  return (
    <div className='container'>
      <h2>Div Todo</h2>
        <h3>Tasks</h3>
      <ul>
        {tasks.map((section, index) => (
          <li>
            {section}
          </li>
        ))}
      </ul>
        <h3>Categories</h3>
      <ul>
        {categories.map((section, index) => (
          <li>
            {section}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

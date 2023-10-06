// Sidebar.js
import './sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Sidebar = ({ onSelectSection }) => {
  const tasks = ['All', 'Upcoming', 'Completed', 'Settings'];

  return (
    <div className='sidebar-container'>
      <img src={logo} alt="" />
      <h2 className='sidebar-heading'>TODO APP</h2>
      <ul>
        {tasks.map((section, index) => (
          <li>
            <Link className='navlinks' to={`/${section.toLowerCase()}`} > 
                {section}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

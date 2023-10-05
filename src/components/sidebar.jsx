// Sidebar.js
import './sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Sidebar = ({ onSelectSection }) => {
  const tasks = ['All', 'Upcoming', 'Completed' ];

  return (
    <div className='sidebar-container'>
      <img src={logo} alt="" />
      <h3 className='sidebar-heading'>Tasks</h3>
      <ul>
        {tasks.map((section, index) => (
          <li>
            <Link className='navlinks' to={`/${section.toLowerCase()}`} > 
                {section}
            </Link>
          </li>
        ))}
      </ul>
        {/*<h3>Categories</h3>
      <ul>
        {categories.map((section, index) => (
          <li>
            {section}
          </li>
        ))}
        </ul>*/}
    </div>
  );
};

export default Sidebar;

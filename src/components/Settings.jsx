import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import './Settings.css';

function Settings(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(storedTasks);
    setTasks(storedTasks);
  }, []);

  const convertData = () => {
    if (tasks.length === 0) return [];

    const keys = Object.keys(tasks[0]);

    return [keys, ...tasks.map(item => keys.map(key => item[key]))];
  };
  
  const csvData = convertData();

  const handleClear = () => {
    setTasks([]);
    localStorage.removeItem('tasks');
    window.alert('Your data has been cleared successfully');
  };

  return (
    <div className='settings-container'>
      <form action="">
        <button className='export-button'>
          <CSVLink data={csvData} className='export-text'>Export my data</CSVLink>
        </button>
        <button className='clear-button' onClick={handleClear}>Clear my data</button>
      </form>
    </div>
  );
}

export default Settings;

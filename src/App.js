import './App.css';
import Completed from './components/Completed';
import Settings from './components/Settings';
import TodoList from './components/TodoList';
import Upcoming from './components/Upcoming';
import Sidebar from './components/sidebar';
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div  className='wrapper'>
      <BrowserRouter>
        <Navbar />
        <Sidebar/>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/all" element={<TodoList />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path='/completed' element={<Completed />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

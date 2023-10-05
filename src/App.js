import './App.css';
import Completed from './components/Completed';
import TodoList from './components/TodoList';
import Upcoming from './components/Upcoming';
import Sidebar from './components/sidebar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div  className='wrapper'>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/all" element={<TodoList />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path='/completed' element={<Completed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

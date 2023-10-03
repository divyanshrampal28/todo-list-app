import './App.css';
import TodoList from './components/TodoList';
import Sidebar from './components/sidebar';
import AddTaskButton from './components/AddTaskButton';

function App() {
  return (
    <div  className='wrapper'>
      <Sidebar />
      <TodoList />
      <AddTaskButton />
    </div>
  );
}

export default App;

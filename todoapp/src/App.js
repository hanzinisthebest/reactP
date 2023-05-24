
import { Text } from '@chakra-ui/react';
import './App.css';
import AddTask from './components/AddTask';
function App() {
  return (
    <>
    <Text fontSize={100}>TODO LIST</Text>
    {/* <Sort/> */}
    {/* <button>Add Task</button> */}
    <AddTask/>
    </>
  );
}

export default App;

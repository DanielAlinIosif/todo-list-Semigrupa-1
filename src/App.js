import "./App.css";
import Input from "./components/Input/Input.js";
import Task from "./components/Task/Task.js";

function App() {
  return (
  <div className="app">
    <h1>Get Things Done</h1>
    <Input btnText="Add task"/>
    <Input btnText="Update task"/>
    <Task/>
  </div>
  );
}

export default App;

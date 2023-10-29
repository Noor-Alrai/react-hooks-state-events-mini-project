import React ,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTasks] =useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All");
  function addTask(newTask){
     setTasks([...task , newTask ])
  }
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filterdTask = selectedCategory === "All" ? task : task.filter(task => task.category === selectedCategory)
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onCategoryChange={handleCategoryChange} categories={CATEGORIES} selectedCategory={selectedCategory} />
      <ul>{filterdTask.map(task =>{
        return <li key={task.text}>{task.text}</li>
      })} </ul>
      <NewTaskForm onTaskFormSubmit={addTask} />
      <TaskList task={task} />
    </div>
  );
}

export default App;

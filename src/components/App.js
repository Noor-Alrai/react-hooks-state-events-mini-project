import React ,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] =useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All");
  function addTask(newTask){
    
     setTasks([...tasks , newTask])
  }
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const filterdTask = selectedCategory === "All" ?  tasks : tasks.filter(task => task.category === selectedCategory)
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onCategoryChange={handleCategoryChange} categories={CATEGORIES} selectedCategory={selectedCategory} />
   
      <NewTaskForm onTaskFormSubmit={addTask} />
      <TaskList tasks={filterdTask} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;

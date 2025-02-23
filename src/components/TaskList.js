import React, {useState} from "react";
import Task from "./Task";
function TaskList(props) {
  const{tasks , onDelete} =props
  return (
    <div className="tasks">
       { tasks.map((task, index) => (
      <Task key={index} text={task.text} category={task.category}  onDelete={() => onDelete(task)}/>
      ))
     }
    </div>
  );
}

export default TaskList;

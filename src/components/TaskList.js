import React, {useState} from "react";
import Task from "./Task";
function TaskList({task}) {


  return (
    <div className="tasks">
       <ul>
      {task.map((task) => (
        <Task key={task.id} text={task.text} category={task.category}/>
      ))}
    </ul>
    </div>
  );
}

export default TaskList;

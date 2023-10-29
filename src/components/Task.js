import React  from "react";
function Task({text , category}) {


   return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" >remove</button>
    </div>
  );
}

export default Task;

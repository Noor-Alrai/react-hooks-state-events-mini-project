import React  from "react";
function Task(props) {
 
const{text , category, onDelete} = props

   return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={onDelete} >remove</button>
    </div>
  );
}

export default Task;

import React ,{useState} from "react";


function NewTaskForm(props) {
 const {onTaskFormSubmit} = props
  const[text,setText] = useState("")
  const[category, setCategory] =useState("All")
  
 
  function handleDeatailOnChange(e){
    setText(e.target.value);
  }
  function handleCategoryOnChange(e){

    setCategory(e.target.value)
  }
  function handleOnSubmit(e){
    e.preventDefault();
 const newTask={
      text: text,
      category: category }
    onTaskFormSubmit(newTask)
    setText("")
    setCategory("All")
  }
 
  return (
    <form className="new-task-form" onSubmit={handleOnSubmit} >
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleDeatailOnChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryOnChange} >
         <option value="Code" >Code</option>
         <option value="Food" >Food</option>
         <option value="Money" >Money</option>
         <option value="Misc" >Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

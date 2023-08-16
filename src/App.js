import './App.css';
import { React, useState }from 'react';
import  TodoList  from "./todoList";

const App = () => {
  const [orginalValue, updateOrginalValue] = useState(""); //orginal value is always usestate value
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    updateOrginalValue(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault();
    const newTodos = [...todos,orginalValue];
    setTodos(newTodos);
    updateOrginalValue("");
  }

  const deleteHandler = (indexValue) => {
    const toDosAfterDelete = todos.filter((todo,index) => index !== indexValue);
    setTodos(toDosAfterDelete);
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title" color="Blue"> Todo List Management</h5>
            <form onSubmit={submitHandler}>
              <input type="text" name="task" value={orginalValue} onChange={changeHandler}/> &nbsp; &nbsp;
              <input type="submit" value="Add" name="Add"/>
            </form>
            <TodoList todos = {todos}  deleteHandler={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  )
}

export default App;

import { useState } from 'react';
import TextField from './TextField';
import Button from './Button';

/** TodoForm Component renders a user input form
 * 
 *  Props:
 *  - createTodo: function from parent to update todo list 
 *  
 *  State:
 *  - formData: object of user inputs like { text: "" }
 * 
 *  TodoApp -> TodoForm -> {TextField, Button} 
 * 
*/
function TodoForm({ createTodo }){
  const [formData, setFormData] = useState({
    text: "",
  });

  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData({[name]: value});
  }

  function handleSubmit(evt){
    evt.preventDefault();
    createTodo(formData);
    setFormData({
      text: "",
    });
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <TextField value={formData.text} handleChange={handleChange}/>
      <Button />
    </form>
  )
}

export default TodoForm;
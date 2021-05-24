import Checkbox from './Checkbox';

/** Todo Component renders individual todos as list items
 *  
 *  Props:
 *  - 
 * 
 *  State:
 *  - 
 * 
 *  TodoApp -> Todo -> Checkbox
 */
function Todo({ todo, checkTodo}){
  function handleChange(){
    checkTodo(todo.id);
  }

  return (
    <li>
      {todo.text}
      <Checkbox todo={todo} handleChange={handleChange}/>
    </li>
  )
}

export default Todo;
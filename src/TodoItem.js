import Checkbox from './Checkbox';

/** Todo Component renders individual todos as list items
 *  
 *  Props:
 *  - todo: an object like {id, text, isChecked}
 *  - checkTodo: function passed by parent to check off todo
 * 
 *  TodoApp -> TodoItem -> Checkbox
 */
function TodoItem({ todo, checkTodo}){

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

export default TodoItem;
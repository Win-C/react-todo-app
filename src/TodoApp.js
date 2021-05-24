import {useState} from 'react';
import { v4 as uuid} from 'uuid';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

/** TodoApp Component renders the TodoForm and Todos
 * 
 *  Props:
 *  - defaulltTodoList is an array like [{id, text, isChecked}, ...] 
 * 
 *  State:
 *  - todoList is an array like [{id, text, isChecked}, ...]
 * 
 *  App -> TodoApp -> {TodoForm, TodoItem}
*/
function TodoApp({defaultTodoList = []}){
  const [todoList, setTodoList] = useState(defaultTodoList);

  function createTodo(newTodo){
    setTodoList(todos => (
      [...todos, {id: uuid(), text: newTodo.text, isChecked: false }]
    ));
  }

  function checkTodo(id){
    setTodoList(todos => todos.map(todo => (
      todo.id === id
      ? {...todo, isChecked: !todo.isChecked}
      : todo
    )));
  }

  return (
    <div className="TodoApp">
      <TodoForm createTodo={createTodo}/>
      <ul>
        {todoList.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo} 
            checkTodo={checkTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoApp;
import {useState} from 'react';
import { v4 as uuid} from 'uuid';

import Todo from './Todo';
import TodoForm from './TodoForm';


function TodoApp({defaultTodoList = []}){
  const [todoList, setTodoList] = useState(defaultTodoList);

  function createTodo(newTodo){
    setTodoList(todos => (
      [...todos, {text: newTodo.text, id: uuid(), isChecked: false }]
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
          <Todo 
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
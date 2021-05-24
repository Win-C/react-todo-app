import TodoApp from './TodoApp';
import './App.css';

/** App Component
 * 
 *  App -> TodoApp
 */
function App() {
  const defaultTodoList = [
    { 
      id: 1,
      text: "Write in journal",
      isChecked: false,
    },
    { 
      id: 2,
      text: "Go for a run",
      isChecked: false,
    },
    { 
      id: 3,
      text: "Meal prep for the week",
      isChecked: true,
    },
  ]

  return (
    <div className="App">
      <TodoApp defaultTodoList={defaultTodoList}/>
    </div>
  );
}

export default App;

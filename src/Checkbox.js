
/** Checkbox Component renders the checkbox for each todo
 *  
 *  Prop:
 *  - todo: an object like {id, text, isChecked}
 *  - handleChange: function passed by parent to check/uncheck todo
 *  
 *  TodoItem -> Checkbox
*/
function Checkbox({ todo, handleChange }){
  return (
    <input 
      type="checkbox"
      name="checkbox"
      checked={todo.isChecked}
      onChange={handleChange}
    />
  );
}

export default Checkbox;
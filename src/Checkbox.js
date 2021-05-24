
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
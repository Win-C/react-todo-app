/** TextField Component renders a textfield for TodoForm
 *  
 *  Props:
 *  - input: string of user's input
 *  - handleChange: function from parent to handle user's input
 * 
 *  TodoForm -> TextField
 * 
*/
function TextField({ value, handleChange }){
  return (
    <div className="TextField">
      <label htmlFor="newTodo">New todo: </label>
      <input
        name="text"
        value={value}
        onChange={(evt) => handleChange(evt)} // Note to self: this was needed to clear the form input
      />
    </div>
  )
}

export default TextField;
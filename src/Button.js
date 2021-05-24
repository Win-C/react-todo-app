
/** Button component renders button to submit TodoForm
 *  
 *  Prop:
 *  - handleSubmit: function from parent to submit form
 *  
 *  TodoForm -> Button
*/
function Button({ handleSubmit }){
  return (
    <button>Add Todo</button>
  )
}

export default Button;
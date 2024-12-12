import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos";
import { Button } from '@swarmakit/react/src/stories/Button'

const AddToDo = () => {
    const[todo, setTodo] = useState("");
    const {handleAddToDo} = useTodos();
 
    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(todo)
        setTodo("")
    }

  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add</button>
        {/* <Button label="Click Me" /> */}
    </form>
  )
}

export default AddToDo
import { useState } from "react"
import { useDispatch } from "react-redux"
import {addTodo} from "../features/Todo/TodoSlice"


const AddTodo = ()=>{
    const [input ,setInput]= useState("")
    const dispatch = useDispatch()

    const addTodoHandler =(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')//to clean input 
    }
    return(
        <>
            <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        //foucus outline while remove focus border
        className="bg-gray-600 focus:outline-none py-2.5 px-2 "
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
        </>
    )
}

export default AddTodo
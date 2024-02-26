import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./style.css"

export default function App() {

  const [todos, setTodos] = useState([])  //store an array, manage a list of todo lists
  const [todosB, setTodosB] = useState([])

  function addTodo(title, musttodo) {
    const unique_id = crypto.randomUUID()
    if (musttodo === true) {
      setTodos(currentTodos => {
        return [
          ...currentTodos,
          {id: unique_id, title, completely: false},
        ]
      });
    }
    if (musttodo === false) {
      setTodosB(currentTodosB => {
        return [
          ...currentTodosB,
          {id: unique_id, title, completely: false},
        ]
      });
    }
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      console.log("Before mapping:", currentTodos);
      const updatedtodo = currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      });
      console.log("after mapping:", updatedtodo);
      return updatedtodo;
    })
  }
  function toggleTodoB(id, completed) {
    setTodosB(currentTodos => {
      console.log("Before mapping:", currentTodos);
      const updatedtodo = currentTodos.map(todoB => {
        if (todoB.id === id) {
          return {...todoB, completed}
        }
        return todoB
      });
      console.log("after mapping:", updatedtodo);
      return updatedtodo;
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
      //filter: change the elems of todolist based on some requirements
    })
    setTodosB(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })

  }

  return (
    <>
      <NewTodoForm onSubmit = {addTodo}/>  
      {/* customed component */}
      <h1 className="header">Must to do list</h1> 
      <ul className = "list">
        {todos.length == 0 && "No todos"} 
        {todos.map(todo => {
          return (
            <li key= {todo.id}>
              <label>
                <input 
                  type="checkbox" 
                  checked = {todo.completed}
                  onChange = {e => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button 
                className = "btn btn-danger"
                onClick = {() => deleteTodo(todo.id)}
              >
              delete</button>
            </li>
          )
        })}
      </ul>
      <h1 className="header">To do list afterward</h1> 
      <ul className = "list">
        {todosB.length == 0 && "No todos"} 
        {todosB.map(todoB => {
          return (
            <li key= {todoB.id}>
              <label>
                <input 
                  type="checkbox" 
                  checked = {todoB.completed}
                  onChange = {e => toggleTodoB(todoB.id, e.target.checked)}
                />
                {todoB.title}
              </label>
              <button 
                className = "btn btn-danger"
                onClick = {() => deleteTodo(todoB.id)}
              >
              delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
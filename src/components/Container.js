import React, {useState, useEffect} from 'react'
import cardHeader from '../assets/pic2.jpg'
import Form from './Form'
import TodoList  from './TodoList'


const Container=()=> {
    const [inputText, setInputText]= useState("")
    const [todos, setTodos]= useState([])
    const [editTodo, setEditTodo]= useState(null)

    const current= new Date()
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

    //return completed Todos
    const completedTodo=()=>{
      return(
      todos.filter(todo=> todo.completed===true).length)
    }

    //return open todos
    const openTodos=()=>{
      return(
        todos.filter(todo=> todo.completed===false).length
      )
    }
   //run only one time when the app starts
    useEffect(() => {
      getList()
    }, [])
  
    useEffect(()=>{
      saveToLocal();
    }, [todos])
  
  
     //saving to local storage
     const saveToLocal=()=>{
      localStorage.setItem("todos", JSON.stringify(todos)) //saving and pushing content into our state
    }
  
    const getList=()=>{
      if(localStorage.getItem("todos") === null){ //if we dont have something then set an empty array
        localStorage.setItem("todos", JSON.stringify([]))
      } else{
       let localTodo= JSON.parse(localStorage.getItem("todos")) //if we have something then get it and push it to the state
       setTodos(localTodo)
      }
    }
    return (
        <>
      <div className="container">
        <div className="main-card">
             <div className="header">
                <img src={cardHeader} alt="header"/> 
                 <div className="date">{date}</div>
          </div>
            <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
             <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />  
             
             <footer>
               <p className="total">{todos.length} tasks</p>
               <p className="complete">{completedTodo()} complete</p>
               <p className="open">{openTodos()} open</p>
             </footer>
            
          </div>      
      </div>
            
        </>
    )
}

export default Container

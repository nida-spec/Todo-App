import React from 'react'

function Todo({text, todo, todos, setTodos, setEditTodo}) {
    const deleteEvent=()=>{
        setTodos(todos.filter((item)=> item.id !== todo.id))
    }
    

    const completeEvent=()=>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    const editEvent=({id})=>{
        const findTodo= todos.find((todo)=> todo.id === id)
        setEditTodo(findTodo)
    }
    return (
        <>
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeEvent} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteEvent} className="delete-btn"><i className="fas fa-trash"></i></button>
            <button onClick={()=> editEvent(todo)} className="edit-btn"><i className="fas fa-edit"></i></button>
            </div>  
            <hr/>
        </>
    )
}

export default Todo

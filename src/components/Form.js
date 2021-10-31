import React, {useEffect} from 'react'

const Form=({inputText, setInputText, todos, setTodos, editTodo, setEditTodo})=> {
    const inputTextEvent=(e)=>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const updateTodo = (text, id, completed) =>{
        const newTodo= todos.map((todo)=>
            todo.id === id ? {text, id, completed} : todo
        )
        setTodos(newTodo)
        setEditTodo("")
    }

    useEffect(()=>{
        if(editTodo){
            setInputText(editTodo.text)
        }else{
            setInputText("")
        }
    },[setInputText, editTodo])

    const submitEvent=(e)=>{
        e.preventDefault()
        if(!editTodo){
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*500}
        ])
        setInputText("")
        } else{
            updateTodo(inputText, editTodo.id, editTodo.completed)
        }
    }
    return (
        <>
         <form className="task-form">
            <input onChange={inputTextEvent} type="text" value={inputText} placeholder="Add Task..." className="todo-input"/>
            <button onClick={submitEvent} type="submit" className="todo-btn">
                <i className="fas fa-plus"></i>
            </button>
        </form>
      
            
        </>
    )
}

export default Form

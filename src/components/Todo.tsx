import React, { useRef, useState } from "react"


const Todo = () => {

    const inputRef = useRef<HTMLInputElement | null>(null)
    // const [todo,setTodo] = useState("")
    const [todoList,setTodoList] = useState<string[]>([])

    // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    //     setTodo(e.target.value)
        
    // }

    const addTodo = () =>{
        

        if(inputRef.current){
            const todo = inputRef.current?.value
            setTodoList([...todoList,todo])
            inputRef.current.value = '';
        }
        
        

    }

    return (
        <div>
            <input
            ref={inputRef}
            type="text"
            placeholder="Enter a Value"
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todoList.map((item)=>{
                    return <li key={item}>{item}</li>
                })}
            </ul>

        </div>
        
    )
}

export default Todo

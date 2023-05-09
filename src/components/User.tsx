import { useContext } from "react"
import { UserContext } from "../App"

const User = () =>{

    const {state,dispatch} = useContext(UserContext)

    return (
        <>
        <h1>{state.name}</h1>
        <h2>{state.age}</h2>
        <button onClick={()=>dispatch({type:'UPDATE_NAME',payload:"Ramesh"})}>Update Name</button>
        <button onClick={()=>dispatch({type:'UPDATE_AGE',payload:15})}>Update Age</button>
        </>
    )
}

export default User

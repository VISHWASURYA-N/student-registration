import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

const Login = () => {
const[username,SetUsername]=useState("")
const[password,SetPassword]=useState("")
const history=useHistory()
const dispatch=useDispatch()
function handleFormSubmit(e){
e.preventDefault();
dispatch({type:"LOGGIN",payload:{username,password}})
SetUsername("")
SetPassword("")
history.push("/home")
}
    return (
        <div className="create">
            <h1>LOGIN</h1>
            
        <form onSubmit={handleFormSubmit}>
        <label>User ID</label>
        <input 
          type="text" 
          required 
          value={username}
          placeholder="enter the Username"
          onChange={(e) => SetUsername(e.target.value)}
        />
           <label>Password:</label>
        <input 
          type="password" 
          required 
          value={password}
          placeholder="enter the password"
          onChange={(e) => SetPassword(e.target.value)}
        />
           <input type="submit" className="delete"/>
        </form>
        </div>
    );
}
 
export default Login;
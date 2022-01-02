import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apiCalls'
import "./login.css"
function Login() {
    const dispatch = useDispatch()
    const HandleClick = (e)=>{
        e.preventDefault()
        login(dispatch,username,password)
    }
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    return (
        <div className='login'> 
            <label >Username:</label>
            <input type="text"  placeholder='username' onChange={e=>setUsername(e.target.value)}/>
            <label >Password:</label>
            <input type="password" placeholder='password' onChange={e=>setPassword(e.target.value)} />
            <button onClick={HandleClick}>SIGN IN</button>
        </div>
    )
}

export default Login

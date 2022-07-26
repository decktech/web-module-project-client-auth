import React, { useState } from "react"
import axios from "axios";

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username:"",
        password:""
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9000/api/login', credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.token)
                props.history.push('/friends')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input onChange={handleChange} name="username"type="text" id="username"/>
          </div>
          <div>
            <label>Password</label>
            <input onChange={handleChange} name="password" type="password" id="password"/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }

  export default Login
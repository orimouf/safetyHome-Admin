import "./login.scss"
import React, { useContext, useState } from 'react'
import { AuthContext } from "../../context/authContext/AuthContext"
import { login } from "../../context/authContext/ApiCalls"

const Login = () => {
  const [fullName, setFullname] = useState("")
  const [password, setPassword] = useState("")
  const { isFetching, dispatch } = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    
    let inputFN = document.getElementsByClassName("fullNameInput")[0]
    let inputPW = document.getElementsByClassName("passwordInput")[0]
    
    if (fullName && password ) {
      login({ fullName, password }, dispatch)
    } else {
      fullName ? inputFN.style.border = "1px solid gray" : inputFN.style.border = "2px solid red"
      password ? inputPW.style.border = "1px solid gray" : inputPW.style.border = "2px solid red"
    }

  }

  return (
      <div className="login">
        <form className="loginContainer">
          <h3 className="mb-5">Sign in</h3>
          <input className="fullNameInput" type="text" placeholder="Full Name" onChange={(e) => setFullname(e.target.value)} />
          <input className="passwordInput" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className="btn-login" onClick={handleLogin} disabled={isFetching}>LOGIN</button>
          <hr className="my-4"></hr>
          <span className="msgLogin"></span>
        </form>
      </div>
  )
}

export default Login
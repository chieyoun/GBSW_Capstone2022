import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../styles/Login.css'

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onIdHandler = (e) => {
    setId(e.target.value);
  }
  const onpwHandler = (e) => {
    setPw(e.target.value);
  }

  return(
    <div className = "center">
    <div className = "Login">
      <form>
      <h2>Login</h2>
      <div>
        <input type="text" value={id} onChange = {onIdHandler} placeholder = "아이디" />
      </div>
      <div>
      <input type="password" value={pw} onChange = {onpwHandler} placeholder = "비밀번호" />
      </div>
      <div>
        <Link to="/Mainpage">
        <button>로그인</button>
        </Link>
      </div>
      </form>
      </div>
    </div>
  )
}

export default Login
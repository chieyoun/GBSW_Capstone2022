import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import '../styles/Login.css';
const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onIdHandler = (e) => {
    setId(e.target.value);
  }
  const onpwHandler = (e) => {
    setPw(e.target.value);
  }

  // useEffect(() => {
  //   loadData();
  // }, [])

  const loadData = async (e) => {
    // e.preventDefault();
    
    let data = {
      user : "",
    }

    axios.post("http://127.0.0.1:3307/login", data, { withCredentials: true })
      .then((res) => {
        console.log(res);
      })

  }

  return(
    <div className="container">
      <div className="form_container">
      <div className="left">
        <h1>LearnChart</h1>
        <span>이 웹사이트 쓰지마유</span>
      </div>
      <div className="right">
        <div className="right_login">
        <input type="text" value={id} onChange = {onIdHandler} placeholder = "아이디" />
        <input type="password" value={pw} onChange = {onpwHandler} placeholder = "비밀번호" />
        <button type="submit" onClick={(e) => loadData()}>로그인</button>
        <span>계정이 없으신가요?</span>
        <Link to='/signup'>
        <span>회원가입</span>
        </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login
import React, {useState} from "react";
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

  return(
    <div className="container">
      <div className="form_container">
      <div className="left">
        <h1>LearnChart</h1>
        <span>저희가 만든 LearnChart는 사용자가 배운 것을 게시글을 써서 </span>
        <span>완성 안됐으니까</span>
      </div>
      <div className="right">
        <div className="right_login">
        <input type="text" value={id} onChange = {onIdHandler} placeholder = "아이디" />
        <input type="password" value={pw} onChange = {onpwHandler} placeholder = "비밀번호" />
        <button type="submit">로그인</button>
        <span>계정이 없으신가요?</span>
        <Link to='/Signup '>
        <span>회원가입</span>
        </Link>
        
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login
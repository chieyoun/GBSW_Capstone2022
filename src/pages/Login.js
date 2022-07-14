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

    // useEffect(() => {   loadData(); }, [])

    const loadData = (e) => {
        e.preventDefault();

        const data = {
            idx : id,
            password: pw,
        }
        axios
            .post("/api/auth/login", data, {withCredentials: true})
            .then((res) => {
                console.log(res);
            })
            window.location.href = "/mainpage";

    }

    return (
        <div className="body">
            <div className="Container">
                <div className="form_container shadow">
                    <div className="left">
                        <h2>LearnChart</h2>
                        <p>저희 LearnChart는 쉽게 자신의 학습 내용을 저장하고 결과를 볼 수 있습니다.</p>
                    </div>
                    <div className="right">
                        <div className="rightInput">
                            <input type="text" placeholder="아이디" onChange={onIdHandler}/>
                            <input type="password" placeholder="비밀번호" onChange={onpwHandler}/>
                        </div>
                        <div className="rightBtn">

                                <button type="submit" onClick={loadData}>로그인</button>
                            <p>계정이 없으신가요?</p>
                            <Link to="/signup">
                                <p>회원가입</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
import React, {Profiler, useState} from "react";
import '../styles/Login_Signup.css';
import axios from "axios";

const Signup = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');
    const [bdate, setBdate] = useState('');

    const onNameHandler = (e) => {
        setName(e.target.value);
    };
    const onIdHandler = (e) => {
        setId(e.target.value);
    };
    const onPwHandler = (e) => {
        setPw(e.target.value);
    };
    const onCpwHandler = (e) => {
        setPwCheck(e.target.value);
    };
    const onBdateHandler = (e) => {
        setBdate(e.target.value);
    };
    const onBtnClick = (e) => {
        if (pw !== pwCheck) {
            alert("비밀번호를 다시 확인 해주세요");
        } else {
            console.log("이름: " + name);
            console.log("아이디: " + id);
            console.log("비밀번호: " + pw);
            console.log("생년월일: " + bdate);

            const body = {
                idx: id,
                name: name,
                password : pw,
                birthday: bdate,
            }

            axios.post("/api/auth/join", body, {withCredentials: true})
            .then((res) => {
                console.log(res);
              })

            alert("회원가입 완료");
        }

    }

    return (
        <div className="center">
            <div className="signppage">
                <form>
                    <h2>회원가입</h2>
                    <div>
                        <input className="Name" type="text" value={name} onChange={onNameHandler} placeholder="*이름"/><br/>
                    </div>
                    <div>
                        <input
                            className="Id"
                            type="text"
                            value={id}
                            onChange={onIdHandler}
                            minLength='5'
                            maxLength='16'
                            placeholder="*아이디(5~16자)"/><br/>
                    </div>
                    <div>
                        <input
                            className="Pw"
                            type="password"
                            value={pw}
                            onChange={onPwHandler}
                            maxLength='12'
                            placeholder="*비밀번호(1~12자)"/><br/>
                    </div>
                    <div>
                        <input
                            className="Cpw"
                            type="password"
                            value={pwCheck}
                            onChange={onCpwHandler}
                            maxLength='12'
                            placeholder="*비밀번호 확인"/><br/>
                    </div>
                    <div>
                        <input type="text" placeholder="생년월일(ex-2005.01.01)" value={bdate} onChange={onBdateHandler}/>
                    </div>
                    <div>
                        <button type="submit" onClick={onBtnClick}>회원 가입</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
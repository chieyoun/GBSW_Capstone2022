import React from "react";
import {Link} from "react-router-dom";
import '../styles/FirstPage.css';

const FirstPage = () => {

    const onClickHandler = (e) => {
        console.log("페이지 이동을 하였습니다.");
    }

    return (
        <div className="center2">
            <div clasclsName="header">

                <Link to="/Signup">
                    <button className="btn1" onClick={onClickHandler}>회원가입</button>
                </Link>
                <Link to="/Login">
                    <button className="btn2" onClick={onClickHandler}>로그인</button>
                </Link> 
                <h1>LearnChart</h1>
            </div>
            <div className="main">
                <div className="imgSort">
                    <img className="image" alt="photo1" src="img/graph2.png"/>
                </div>
                <h2>LearnChart란?</h2>
                <p>저희가 개발하는 LearnCheck는 코딩 혹은 기타 프로젝트 등 자신이 했는 활동을 기록하며 활동을 그래프나 표로 나타내 수치를
                    보여주면서 일의 능률을 높혀줍니다.</p>
                <p>LearnCheck는 포트폴리오 프로그램으로 좀 더 사용하기 쉽고 깃허브나 기타 포트폴리오 사이트보다 쉽게 접근할 수 있으며 간단하다는 큰
                    장점을 지니고 있습니다.</p>
            </div>
        </div>
    )
}

export default FirstPage
import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../styles/login.css';

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

    const loadData = async (e) => {
        // e.preventDefault();

        let data = {
            user: ""
        }
        axios
            .post("http://127.0.0.1:3307/login", data, {withCredentials: true})
            .then((res) => {
                console.log(res);
            })

    }

    return (
        <div>
            <div className="Container">
                
            </div>
        </div>
    )
}

export default Login
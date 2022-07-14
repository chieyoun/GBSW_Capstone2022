import React, {useEffect, useState} from "react";
import '../styles/Mainpage.css';
import logoImg from '../assets/logoImg.png';
import plus from '../assets/plus.png'
import profileImg from '../assets/profileImg.png';
import Capstone from '../assets/Capstone.jpg'
import menu from '../assets/menu.png';
import Navbar from '../components/Navbar';
import {Link} from "react-router-dom";
import { Plue } from 'react-icons/fa';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';



const Mainpage = () => {

  const [data, setData] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get("/api/post", {withCredentials: true})
    .then((res) => {
      console.log(res)
      setData(res.data)
    });
  }



  useEffect(() => {
    fetchUsers();
  }, []);
  return (
      <div className="center1">
          <Navbar/>

          <div className="headerSort"></div>
          <div className="Listsort">
          <div className="flex flex-col w-full justify-center items-center w-[55rem]">
            <div className="flex flex-row border-b-2 p-3 justify-center items-center">
              <div className="w-[40rem] flex  justify-center items-center">제목</div>
              <div className="w-[12rem] flex justify-center items-center">날짜</div>
            </div>
            <div  class="post">
            {data.map((data, i) => (
              <Link key={data.id} className="" to={`/detail/${data.id}`}>
                <div className="flex flex-row w-full justify-center items-center border-b-2 p-3">
                  <div>{i+1}</div>
                  <div className="w-[40rem] flex pl-10 justify-start items-center">{data.title}</div>
                  <div className="w-[12rem] flex  justify-center items-center">{data.updatedAt}</div>
                </div>
              </Link>
            ))}
          </div>
          </div>
          </div>
          <div className="btn">
              <Link to='/WritingPage'>
                  <img src={plus}/>
              </Link>
          </div>
      </div>
  )
}

export default Mainpage
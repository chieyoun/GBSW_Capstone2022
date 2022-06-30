import React from "react";
import '../styles/Mainpage.css';
import Capstone from '../assets/Capstone.jpg';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import plus from "../assets/plus2.png";

const data = [
  {
    id: 1,
    src: Capstone,
    title: 'title',
  },
  {
    id: 2,
    src: Capstone,
    title: 'title',
  },
  {
    id: 3,
    src: Capstone,
    title: 'title',
  }, 
  {
    id: 4,
    src: Capstone,
    title: 'title',
  },
  {
    id: 5,
    src: Capstone,
    title: 'title',
  },
  {
    id: 5,
    src: Capstone,
    title: 'title',
  },
]

const Mainpage = () => {
  return (
    <div className="center1">
      {/* <header>
        <div className="lineImg">
          <div className="lineImgSort">
            <img src={menu} />
          </div>
        </div>

        <div className="logo">
          <img src={logoImg} alt="로고" />
        </div>

        <div className="profile">
            <img src={profileImg} alt="프로필" />
        </div>
      </header> */}

      <Navbar />

      <div className="headerSort"></div>

      <div class="postDiv">
        <div className="postSort">
          {
            data.map((post) => (
              <div key={post.id} class="post">
                <div className="postImg">
                  <img src={post.src} alt="타이틀 이미지" />
                </div>
                <div className="text">
                  {post.title}
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="btn">
        <Link to='/WritingPage'>
          <img src={plus} />
        </Link>
      </div>
      
    </div>
  )
}

export default Mainpage;
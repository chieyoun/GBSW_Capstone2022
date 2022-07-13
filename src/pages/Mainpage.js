import React, {useEffect} from "react";
import '../styles/Mainpage.css';
import logoImg from '../assets/logoImg.png';
import plus from '../assets/plus.png'
import profileImg from '../assets/profileImg.png';
import Capstone from '../assets/Capstone.jpg'
import menu from '../assets/menu.png';
import Navbar from '../components/Navbar';
import {Link} from "react-router-dom";
import img1 from '../assets/img1.PNG';
import img2 from '../assets/img2.PNG';
import img3 from '../assets/img3.PNG';
import img4 from '../assets/img4.PNG';
import img5 from '../assets/img5.PNG';
import img6 from '../assets/img6.PNG';
import axios from 'axios';

const data = [
<<<<<<< HEAD
    {
        id: 1,
        title: '캡스톤',
        content: "content",
        writer: "writer",
        wdate: "2022-06-13",
        src: img2
    }, {
        id: 2,
        title: 'Calendar (jsp)',
        content: "content",
        writer: "writer",
        wdate: "2022-05-18",
        src: img3
    }, {
        id: 3,
        title: '회원관리 프로그램 만들기 (jsp)',
        content: "content",
        writer: "writer",
        wdate: "2022-04-29",
        src: img1
    }, {
        id: 4,
        title: 'news viewer 만들기 (react)',
        content: "content",
        writer: "writer",
        wdate: "2022-04-12",
        src: img4
    }, {
        id: 5,
        title: 'router (react)',
        content: "content",
        writer: "writer",
        wdate: "2022-03-23",
        src: img5
    }, {
        id: 6,
        title: 'c언어',
        content: "content",
        writer: "writer",
        wdate: "2022-03-22",
        src: Capstone
    }
=======
  {
    id: 1,
    title: '캡스톤',
    content: "content",
    writer: "writer",
    wdate: "2022-06-13",
    src: img2,
  },
  {
    id: 2,
    title: 'Calendar (jsp)',
    content: "content",
    writer: "writer",
    wdate: "2022-05-18",
    src: img3,
  },
  {
    id: 3,
    title: '회원관리 프로그램 만들기 (jsp)',
    content: "content",
    writer: "writer",
    wdate: "2022-04-29",
    src: img1,
  }, 
  {
    id: 4,
    title: 'news viewer 만들기 (react)',
    content: "content",
    writer: "writer",
    wdate: "2022-04-12",
    src: img4,
  },
  {
    id: 5,
    title: 'router (react)',
    content: "content",
    writer: "writer",
    wdate: "2022-03-23",
    src: img5,
  },
  {
    id: 6,
    title: '전화번호부 (java)',
    content: "content",
    writer: "writer",
    wdate: "2022-03-22",
    src: img6,
  },
>>>>>>> b3d7bf7a21f0aa743ed0a40ac2b21ee1b270ebba
]

const Mainpage = () => {
<<<<<<< HEAD
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
      </header> */
            }

            <Navbar/>

            <div className="headerSort"></div>
            <div className="Listsort">
            <table>
              <thead>
                <tr>
                  <th>제목</th>
                  <th>날짜</th>
                </tr>
              </thead>
              {data.map((data) => (

                    <tbody key={data.id} class="post">

                      <tr>
                        <td>{data.title}</td>
                        <td>{data.wdate}</td>
                      </tr>
                    </tbody>
              ))}
            </table>
            </div>
            <div className="btn">
                <Link to='/WritingPage'>
                    <img src={plus}/>
                </Link>
            </div>
        </div>
    )
=======
  const fetchUsers = async () => {
    const response = await axios.get("/api/post", {withCredentials: true})
    .then((res) => console.log(res));
  }
  useEffect(() => {
    fetchUsers();
  }, []);
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
>>>>>>> b3d7bf7a21f0aa743ed0a40ac2b21ee1b270ebba
}

export default Mainpage
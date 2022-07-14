import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Post.css';
import Navbar from '../components/Navbar';
function Post() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {id} = useParams();

    useEffect(() => {
      fetchUsers();
    }, [id]);

    const fetchUsers = async () => {
      const response = await axios
        .get(`/api/post/${id}`, {withCredentials: true})
        .then((res) => {
            console.log(res)
            setUser(res.data);
        });
    };

    const Delete = (e) => {
      e.preventDefault();
      axios.delete(`/api/post/remove/${id}`, {withCredentials : true})
      .then((res) => {
        console.log(res);
      })
      window.location.href = "/mainpage";
    }

    if (loading) 
        return <div>로딩중..</div>
    if (error) 
        return <div>에러가 발생했습니다</div>;
    if (!user) 
        return null;
    return (
        <div>
          <Navbar/>
          
            <div className='title'>
                <h2>{user.title}</h2>
                <div className='remove'>
                  <div className='removeSort'>
                    <button onClick={Delete}>삭제하기</button>
                  </div>
                </div>
                <p>({user.updatedAt})</p>
                
            </div>
            
            <div className='contents'>
                <p>{user.content}</p>
            </div>
            <div className='pagination'>
                <Link to={`/detail/${user.id-1}`} >
                    <div className='pageitem' aria-hidden="true">&laquo;</div>
                </Link>
                <Link to={`/detail/${user.id+1}`} >
                  <div className='pageitem' aria-hidden="true">&raquo;</div>
                </Link>
            </div>

            <div className='remove'>
              <button onClick={Delete}>삭제다용~</button>
            </div>
  
        </div>

    );
}

export default Post;
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import '../styles/Post.css';
import Navbar from '../components/Navbar';
function Post() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고 setError(null); setUsers(null); loading
        // 상태를 true 로 바꿉니다. setLoading(true);
        const response = await axios
            .get(`/api/post/${id}`, {withCredentials: true})
            .then((res) => {
                console.log(res)
                setUser(res.data);
            });
        // 데이터는 response.data 안에 들어있습니다. setLoading(false);
    };

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
                <p>({user.updatedAt})</p>
            </div>
            <div className='contents'>
                <p>{user.content}</p>
            </div>
        </div>

    );
}

export default Post;
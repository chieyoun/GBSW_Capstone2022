import React, {useState} from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
} from 'chart.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Chart} from 'react-chartjs-2'
import Navbar from '../components/Navbar'
import '../styles/Mypage.css'
import profile from '../assets/profile.png'
ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
];

export const data = {
    labels,
    datasets: [
        {
            type: 'line',
            label: '게시글(꺾은 선 그래프)',
            borderColor: '#45B076',
            borderWidth: 2,
            fill: false,
            data: [
                10,
                7,
                28,
                32,
                57,
                21,
                10
            ]
        }, {
            type: 'bar',
            label: '게시글',
            backgroundColor: '#B4E197',
            data: [
                10,
                7,
                28,
                32,
                57,
                21,
                10
            ],
            borderColor: 'white',
            borderWidth: 2
        }
    ]
};

const Mypage = () => {
    const [fileImage, setFileImage] = useState(profile);
    const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <div className='all'>
            <div className='header'>
                <Navbar/>
            </div>
            <div className='profile'>
                {
                    fileImage && 1
                        ? <img
                                alt='sample'
                                src={fileImage}
                                style={{
                                    margin: "auto",
                                    borderRadius: "500px",
                                    width: "8em",
                                    height: "8em"
                                }}/>
                        : <></>
                        
                }
                <input accept='image/*' type="file" onChange={saveFileImage}/>
                <Button type='submit' onClick={handleShow}>이미지 변경</Button>
            </div>
            <div>
              <Modal>

              </Modal>
            </div>
            <div
                className='chart'
                style={{
                    position: 'relative',
                    top: '15rem',
                    left: '15%',
                    margin: '0 aut0'
                }}>
                <Chart type='bar' data={data}/>
            </div>
        </div>

    )
}
export default Mypage;
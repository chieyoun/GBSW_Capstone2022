import React, {useState} from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    chart,
    registerables
} from 'chart.js';
import {Chart, Line} from 'react-chartjs-2'
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
    Tooltip,
    ...registerables
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
                6,
                3,
                8,
                10,
                7,
                2,
                9
            ]
        }, {
            type: 'bar',
            label: '게시글',
            backgroundColor: '#B4E197',
            data: [
                6,
                3,
                8,
                10,
                7,
                2,
                9
            ],
            borderColor: 'white',
            borderWidth: 2
        }
    ]
};

export const options = {
    // 옵션 (1)
    responsive: false,
    // 옵션 (2)
    // 옵션 (3)
    scales: {
      x: {
        grid: {
        //   display: false,
        },
      },
      y: {
        grid: {
          color: "#E3E3E3",
        },
      },
    },
}

const Mypage = () => {
    const [fileImage, setFileImage] = useState(profile);
    const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]))
    }
    const ChgFile = () => {
        const file = document.getElementById("file");
        file.click();
    }
    function readImage(input) {
        const file = input.files[0];
        if(input.files && file) {
          const reader = new FileReader()
          reader.onload = e => {
            setFileImage(e.target.result);
          }
          reader.readAsDataURL(file);
        }
      };

    return (
        <div className='all'>
            <div className='header'>
                <Navbar/>
            </div>
            <div>
                <div  className='profile'>
                    <div className='profile-img'>
                        {
                            fileImage?
                                <img
                                    src={fileImage}
                                    style={{
                                        borderRadius: "500px",
                                        width: "8em",
                                        height: "8em"
                                    }}/>
                                : ''
                        }
                        <button type='button' className='img-button' onClick={ChgFile}>이미지 변경</button>
                        <input type="file" id="file" className='hidden' onChange={(e) => {readImage(e.target)}} />
                    </div>
                    <div className='profile-text'>
                        <p>test</p>
                    </div>
                </div>
                <div>
                    <h1 className='chart-header'>나의 학습량</h1>
                    <div className='chart'>
                        <Line options={options} data={data} width="600px" height="500px" />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Mypage;
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
} from 'chart.js';
import { Chart } from 'react-chartjs-2'
import Navbar from '../components/Navbar'
import '../styles/Mypage.css'
import profile from '../assets/profileImg.png'
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: '게시글(꺾은 선 그래프)',
      borderColor: '#45B076',
      borderWidth: 2,
      fill: false,
      data: [10, 7, 28, 32 , 57, 21, 10], 
    },
    {
      type: 'bar',
      label: '게시글',
      backgroundColor: '#B4E197',
      data: [10, 7, 28, 32 , 57, 21, 10],
      borderColor: 'white',
      borderWidth: 2,
    },
  ],
};





const Mypage = () => {
  const [fileImage, setFileImage] = useState(profile);
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className='all'>
      <div className=''>
        <Navbar/>
      </div>
      <div className='profile'>
        {fileImage && 1 ? <img
          alt='sample'
          src={fileImage}
          style = {{margin: "auto", borderRadius: "500px", width:"8em", height:"8em"}}
        /> : <></>}
        <input 

          accept='image/*'
          type = "file"
          onChange={saveFileImage}
        />
      </div>
      <div className='chart' style={{
        position: 'relative',
        top: '15rem',
        left: '15%',
        margin: '0 aut0',
      }} >
          <Chart type='bar' data={data} />
      </div>
    </div>
    
  )
  
}
export default Mypage;
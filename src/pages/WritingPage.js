import { useState, useEffect } from 'react';
import '../styles/WritingPage.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'html-react-parser';
import Axios from 'axios';

function WritingPage() {
  const [movieContent, setMovieContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  useEffect(() => {
      Axios.get('http://localhost:3001/api/get').then((response)=>{
      setViewContent(response.data);
    })
  },[viewContent])

  const submitReview = ()=>{
    Axios.post('http://localhost:3001/api/insert', {
      title: movieContent.title,
      content: movieContent.content
    }).then(()=>{
      alert('등록 완료!');
    })
  };

  const getValue = e => {
    const { name, value } = e.target;
    setMovieContent({
      ...movieContent,
      [name]: value
    })
  };


  return (
    <div className="App">
      
      <div className='form-wrapper'>
        <div className='titleSort'>
          <input className="title-input"
            type='text'
            placeholder='제목'
            onChange={getValue}
            name='title'
          />
        </div>
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setMovieContent({
              ...movieContent,
              content: data
            })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button" onClick={submitReview}>저장</button>
    </div>
  );
}

export default WritingPage;

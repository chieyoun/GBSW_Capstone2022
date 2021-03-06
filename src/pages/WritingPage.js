//TODO 오류잡기: 이미지 업로드시 TypeError: Failed to fetch 
import { useState, useEffect } from 'react';
import '../styles/WritingPage.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'html-react-parser';
import Axios from 'axios';
import { Link } from 'react-router-dom';
const API_URL = "https://77em4-8080.sse.codesandbox.io";
const UPLOAD_ENDPOINT = "upload_files";

function WritingPage() {
  const [movieContent, setMovieContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  const submitReview = ()=>{
    Axios.post('/api/post/write', {
      title: movieContent.title,
      content: movieContent.content
    }).then((res)=>{
      console.log(res);
      // alert('등록 완료!');
    }) 
    window.location.href = "/mainpage";
  }

  const getValue = e => {
    const { name, value } = e.target;
    setMovieContent({
      ...movieContent,
      [name]: value
    })
  };
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("files", file);
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000");
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              body: body
              // mode: "no-cors"
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({
                  default: `${API_URL}/${res.filename}`
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      }
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  


  return (
    <div className="App">
      <div className='form-wrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
        />
        <CKEditor
        config={{
          extraPlugins: [uploadPlugin]
        }}
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

import React, { useMemo, useRef } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import CustomToolbar from './CustomToolbar';
import axios from 'axios'

function TextEditor(props) {
  const quillRef = useRef();

  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onChange = async () => {
      if (input.files) {
        var file = input.files[0];
        var formData = new FormData();

        formData.append('image', file);

        // image api 있나요 제가 못찾은걸까요
        try {
          const result = await axios.post(
            'http://localhost:8080/image',
            formData
          );
          console.log('성공 시 백에서 보내는 데이터', result.data.url);
          const IMG_URL = result.data.url;

          // 이미지 태그를 에디터에 써주기
          // 1. 에디터 객체 가져오기
          const editor = quillRef.current.getEditor();

          // 2. 현재 에디터 커서 위치값을 가져온다
          const range = editor.getSelection();
          // 가져온 위치에 이미지를 삽입한다
          editor.insertEmbed(range, 'image', IMG_URL);
        } catch (error) {
          console.log('이미지 업로드 실패');
        }
      }
    };
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: '#toolbar',
        handlers: {
          //이미지 처리는 우리가 직접 imageHandler 함수로 처리할 것이다
          image: imageHandler,
        },
      },
    };
  }, []);

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'list',
    'bullet',
    'align',
    'color',
    'background',
    'image',
  ];

  // 이벤트 핸들러
  // const onClickContents = () => {
  //   const editor = quillRef.current.getEditor();
  //   // console.log(quillRef.current);
  //   console.log(editor.root); // 에디터 안의 내용 HTML 태그

  //   // 현재 에디터 안에 어떤 데이터가 들어있는지 확인해 보자
  //   console.log('안의 내용물 전부', quillRef.current.getEditorContents());
  // };

  return (
    <div>
      {/* react-quill */}
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          modules={modules}
          formats={formats}
          value={props.value || ''}
          onChange={props.onChange}
          name="desc"
        />
      </div>
    </div>
  );
}

export default TextEditor
import React, {useState, useMemo} from 'react'
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomToolbar from './CustomToolbar'

function PostCreate(props) {
  const [PostTitle, setPostTitle] = useState('')
  const [PostDesc, setPostDesc] = useState('')
  //const [FilePath, setFilePath] = useState('')

  const onTitleChange=(e)=>{
    setPostTitle(e.currentTarget.value)
  }

  const onDescChange=(e)=>{
    setPostDesc(e.currentTarget.value)
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    const variable={
      title: PostTitle,
      desc: PostDesc,
    }
    //console.log(variable)

    axios.post('http://localhost:3000/createPost', variable)
    .catch(function(err){
      if(err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }else if(err.request){
        console.log(err.request)
      }
      
    })
    .then((response)=>{
      console.log(response)
      // if (response.data.success) {
      //   //
      // } else {
      //   alert('게시물 등록 실패')
      // }
    })
    
  }

  //////////////////////////// react-quill ////////////////////////////
  const imageHandler = () => { 
    const input=document.createElement('input')

    input.setAttribute('type','file')
    input.setAttribute('accept','image/*')
    input.click()

    input.onChange = async() => { 
      if(input.files) {
        var file = input.files[0]
        var formData = new FormData()

        formData.append('image', file)

        var fileName = file.name

        console.log(formData)
      }
    }
  }


  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#toolbar",
        handlers: {
          //이미지 처리는 우리가 직접 imageHandler라는 함수로 처리할 것이다.
          image: imageHandler,
        },
      },
    };
  }, []);


  const formats = [ 
    "header", "font", "size", "bold", "italic", "underline", "list",
    "bullet", "align", "color", "background", "image",
  ];

  const handleDesc = (value) => {
    //console.log(value);
    setPostDesc(value);
  };
  //////////////////////////// react-quill ////////////////////////////


  return (
    <div class="container">
      <form onSubmit={onSubmit}>

        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">제목</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder='제목' onChange={onTitleChange} value={PostTitle} name='title'></input>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">내용</label>
          {/* <input type="text" class="form-control" id="formGroupExampleInput2" placeholder='내용' onChange={onContentsChange} value={PostContents} name='contents'></input> */}

          {/* react-quill */}
          <div className="text-editor">
            <CustomToolbar />
            <ReactQuill modules={modules} formats={formats} 
            value={PostDesc} onChange={handleDesc} name='desc'/>
          </div>
        </div>


        <div>image_image_image TAT</div>
        <br/>

        <div class="col-12">
          <button type="submit" class="btn btn-warning" onClick={onSubmit}>등록</button>
        </div>
        
      </form>
    </div>
  );
}

export default PostCreate;

//그러니까 내가 모르는 걸 정리해보자 axios 사용해서 delete 요청을 보내야 하는데!, url parameter를 query string으로! 
//어떻게 코드를 짜야 하는가?, id 어떻게 받아오는가.
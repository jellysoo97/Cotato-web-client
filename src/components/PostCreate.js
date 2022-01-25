import React, {useState} from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'

function PostCreate(props) {
  const [PostTitle, setPostTitle] = useState('')
  const [PostContents, setPostContents] = useState('')
  const [FilePath, setFilePath] = useState('')

  const onTitleChange=(e)=>{
    setPostTitle(e.currentTarget.value)
  }

  const onContentsChange=(e)=>{
    setPostContents(e.currentTarget.value)
  }

  const onDrop=(files)=>{
    let formData=new FormData();
    const config={
        header: {'content-type': 'multipart/form-data'}
    }

    formData.append("file", files[0]) //배열 형태로 가져옴
    
    //file 정보를 서버로 보냄(index.js로 감)
    axios.post('/api/video/uploadfiles', formData, config)
    .then(response=>{
      if(response.data.success){
        //console.log(response.data)
        
        // let variable={
        //   filePath: response.data.filePath,
        //   fileName: response.data.fileName
        // }

        setFilePath(response.data.filePath)
      }
    })
  }

const onSubmit=(e)=>{
  e.preventDefault()
  const variable={
    title: PostTitle,
    contents: PostContents,
    filePath: FilePath,
  }
  console.log(variable)

  axios.post('http://localhost:3000/createPost ', variable)
  .then(response=>{
    if (response.data.success) {
      console.log(response.data)
      setPostTitle(response.data)
    } else {
      alert('게시물 등록 실패')
    }
  })
}

  return (
    <div class="container">
      <form onSubmit={onSubmit}>
        <div>
          {/* Drop zone */}
          <Dropzone
          onDrop={onDrop}
          multiple={false} //한번에 파일을 하나만 올리면 false 
          maxSize={90000000000}
          >

          {({ getRootProps, getInputProps})=>(
            <div class="container" style={{height: '60px', border: '3px solid lightgray', display: 'flex',
            alignItems: 'center', justifyContent: 'center'}} {...getRootProps()}>
              <input {...getInputProps()}/>
              <div>Image Upload</div>
            </div>
          )}
          </Dropzone>
        </div>
        <hr/>

        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">제목</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder='제목' onChange={onTitleChange} value={PostTitle} name='title'></input>
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">내용</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder='내용' onChange={onContentsChange} value={PostContents} name='contents'></input>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-warning" onClick={onSubmit}>등록</button>
          </div>
      </form>
    </div>
  );
}

export default PostCreate;

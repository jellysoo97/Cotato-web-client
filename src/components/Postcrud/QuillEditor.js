import React from "react"
import ReactQuill, { Quill } from "react-quill"
import "react-quill/dist/quill.snow.css"

import axios from "axios"
const __ISMSIE__ = navigator.userAgent.match(/Trident/i) ? true : false

// Quill.register('modules/clipboard', PlainClipboard, true);

const BlockEmbed = Quill.import("blots/block/embed")

class ImageBlot extends BlockEmbed {
  static create(value) {
    const imgTag = super.create()
    imgTag.setAttribute("src", value.src)
    imgTag.setAttribute("alt", value.alt)
    imgTag.setAttribute("width", "100%")
    return imgTag
  }

  static value(node) {
    return { src: node.getAttribute("src"), alt: node.getAttribute("alt") }
  }
}

ImageBlot.blotName = "image"
ImageBlot.tagName = "img"
Quill.register(ImageBlot)

class QuillEditor extends React.Component {
  bandId
  placeholder
  onEditorChange
  onImageChange
  _isMounted

  constructor(props) {
    super(props)
    console.log(this.props.value)
    this.state = {
      editorHtml: __ISMSIE__ ? this.props.value : "",
      files: [],
    }

    this.reactQuillRef = null

    this.inputOpenImageRef = React.createRef()
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  handleChange = (html) => {
    console.log("html", html)

    this.setState(
      {
        editorHtml: html,
      },
      () => {
        this.props.onEditorChange(this.state.editorHtml)
      }
    )
  }

  // I V F P들을  눌렀을떄 insertImage: this.imageHandler로 가서  거기서 inputOpenImageRef를 클릭 시킨다.
  imageHandler = () => {
    this.inputOpenImageRef.current.click()
  }

  insertImage = (e) => {
    e.stopPropagation()
    e.preventDefault()

    if (
      e.currentTarget &&
      e.currentTarget.files &&
      e.currentTarget.files.length > 0
    ) {
      const file = e.currentTarget.files[0]

      let formData = new FormData()
      const config = {
        header: { "content-type": "multipart/form-data" },
      }
      formData.append("file", file)

      axios
        .post(
          "http://localhost/8080/" + this.props.category + "/createPost",
          formData,
          config
        )
        .then((response) => {
          if (response.data.success) {
            console.log(response.data.success)
            const quill = this.reactQuillRef.getEditor()
            quill.focus()

            let range = quill.getSelection()
            let position = range ? range.index : 0

            //먼저 노드 서버에다가 이미지를 넣은 다음에   여기 아래에 src에다가 그걸 넣으면 그게
            //이미지 블롯으로 가서  크리에이트가 이미지를 형성 하며 그걸 발류에서     src 랑 alt 를 가져간후에  editorHTML에 다가 넣는다.
            quill.insertEmbed(position, "image", {
              src: "http://localhost:3000/" + response.data.url,
              alt: response.data.fileName,
            })
            quill.setSelection(position + 1)

            if (this._isMounted) {
              this.setState(
                {
                  files: [...this.state.files, file],
                },
                () => {
                  this.props.onFilesChange(this.state.files)
                }
              )
            }
          } else {
            return alert("failed to upload file")
          }
        })
    }
  }

  render() {
    return (
      <div>
        <div id="toolbar">
          <select
            className="ql-header"
            defaultValue={""}
            onChange={(e) => e.persist()}
          >
            <option value="1" />
            <option value="2" />
            <option value="3" />
          </select>
          <select class="ql-size">
            <option value="small"></option>
            <option selected></option>
            <option value="large"></option>
            <option value="huge"></option>
          </select>
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
          <select className="ql-color">
            <option value="red"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option value="orange"></option>
            <option value="violet"></option>
            <option value="#d0d1d2"></option>
            <option selected></option>
          </select>
          <select className="ql-background">
            <option value="red"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option value="orange"></option>
            <option value="violet"></option>
            <option value="#d0d1d2"></option>
            <option selected></option>
          </select>
          <button className="ql-image"></button>
        </div>
        <ReactQuill
          ref={(el) => {
            this.reactQuillRef = el
          }}
          theme={"snow"}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          modules={this.modules}
          formats={this.formats}
          value={this.state.editorHtml}
        />
        <input
          type="file"
          accept="image/*"
          ref={this.inputOpenImageRef}
          style={{ display: "none" }}
          onChange={this.insertImage}
        />
      </div>
    )
  }

  modules = {
    // syntax: true,
    toolbar: {
      container: "#toolbar",
      //id ="toorbar"는  그 위에 B I U S I V F P 이거 있는 곳이다.
      handlers: {
        insertImage: this.imageHandler,
      },
    },
  }

  formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "color",
    "background",
    "image",
  ]
}

export default QuillEditor

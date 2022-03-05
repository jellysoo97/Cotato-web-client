import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"

export const AuthTitle = ({ title }) => {
  return (
    <div className="container">
      <div className="row mb-3">
        <img className="col-4" src="./images/logo1.png" width={"30px"} height={"90px"} />
        <div className="col-4 text-center mt-2" style={{ fontSize: "20px", fontWeight: "bold" }}>
          Cotato
        </div>
        <img className="col-4" src="./images/logo2.png" width={"30px"} height={"90px"} />
      </div>
      <h2>{title}</h2>
      <hr />
    </div>
  )
}
function AuthBox({ setValue, label, text, warning, icon, placeholder }) {
  const [newValue, setnewValue] = useState("")

  const handleOnChange = (e) => {
    setnewValue(e.target.value)
  }

  useEffect(() => {
    setnewValue(newValue)
    setValue(newValue)
  })

  return (
    <div className="container mb-3">
      <div className="row">
        <form>
          <div className="col-2 mb-2">
            <label for={label}>{text}</label>
          </div>
          <span className="invalid-feedback">{warning}</span>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={icon} size="2x" />
                </span>
              </div>
              <input value={newValue} onChange={handleOnChange} type="text" name="" id={label} className="form-control" placeholder={placeholder} required />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
function AuthBox2({ setValue2, label, text, warning, icon, placeholder }) {
  const [newValue, setnewValue] = useState("")

  const handleOnChange = (e) => {
    setnewValue(e.target.value)
  }

  useEffect(() => {
    setnewValue(newValue)
    setValue2(newValue)
  })
  return (
    <div className="container mb-3">
      <div className="row">
        <form>
          <div className="col-3 mb-2">
            <label for={label}>{text}</label>
          </div>
          <span className="invalid-feedback">{warning}</span>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={icon} size="2x" />
                </span>
              </div>
              <input value={newValue} onChange={handleOnChange} type="password" id={label} className="form-control" placeholder={placeholder} required />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export const AuthButton = ({ confirm, cancel }) => {
  return (
    <div className="mt-4">
      <button type="button" className="btn btn-primary" style={{ width: "90px", marginRight: "20px" }}>
        {confirm}
      </button>
      <button type="button" className="btn btn-outline-primary" style={{ width: "90px" }}>
        {cancel}
      </button>
    </div>
  )
}

export { AuthBox, AuthBox2 }

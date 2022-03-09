import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect } from "react"

export const AuthTitle = ({ title }) => {
  return (
    <div className="container">
      <div className="row mb-3">
        <img
          className="col-4"
          src="./images/logo1.png"
          width={"30px"}
          height={"90px"}
        />
        <div
          className="col-4 text-center mt-4"
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          Cotato
        </div>
        <img
          className="col-4"
          src="./images/logo2.png"
          width={"30px"}
          height={"90px"}
        />
      </div>
      <h3>{title}</h3>
      <hr />
    </div>
  )
}
export const AuthBox = ({
  label,
  text,
  warning,
  icon,
  placeholder,
  name,
  getValue,
}) => {
  const [newValue, setnewValue] = useState("")

  const handleOnChange = (e) => {
    setnewValue(e.target.value)
  }

  useEffect(() => {
    setnewValue(newValue)
    getValue(newValue)
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
              <input
                type="text"
                id={label}
                name={name}
                value={newValue}
                onChange={handleOnChange}
                className="form-control"
                placeholder={placeholder}
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export const AuthBox2 = ({
  label,
  text,
  warning,
  icon,
  placeholder,
  name,
  getPassword,
}) => {
  const [newValue, setnewValue] = useState("")

  const handleOnChange = (e) => {
    setnewValue(e.target.value)
  }

  useEffect(() => {
    setnewValue(newValue)
    getPassword(newValue)
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
              <input
                type="password"
                id={label}
                className="form-control"
                placeholder={placeholder}
                name={name}
                value={newValue}
                onChange={handleOnChange}
                required
              />
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
      <button
        type="button"
        className="btn btn-primary"
        style={{ width: "90px", marginRight: "20px" }}
      >
        {confirm}
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        style={{ width: "90px" }}
      >
        {cancel}
      </button>
    </div>
  )
}

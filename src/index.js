import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { AuthErrorEventBus } from "./context/AuthContext"
import HttpClient from "./network/http"
import TokenStorage from "./db/token"
import AuthService from "./service/auth"

const baseURL = process.env.REACT_APP_BASE_URL
const tokenStorage = new TokenStorage()
const httpClient = new HttpClient(baseURL)
const authErrorEventBus = new AuthErrorEventBus()
const authService = new AuthService(httpClient, tokenStorage)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider
        authService={authService}
        authErrorEventBus={authErrorEventBus}
      >
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

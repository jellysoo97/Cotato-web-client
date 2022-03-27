import {
  createContext,
  createRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react"
import { Navigate } from "react-router-dom"
import App from "../App"

const AuthContext = createContext({})
const contextRef = createRef()

export function AuthProvider({ authService, authErrorEventBus, postService }) {
  const [user, setUser] = useState(undefined)

  useImperativeHandle(contextRef, () => (user ? user.token : undefined))

  useEffect(() => {
    authErrorEventBus.listen((err) => {
      console.log(err)
      setUser(undefined)
    })
  }, [authErrorEventBus])

  useEffect(() => {
    authService
      .me()
      .then((user) => setUser(user))
      .catch(console.error)
  }, [authService])

  const signUp = useCallback(
    async (name, id, pwd, email) =>
      authService.signup(name, id, pwd, email).then(console.log(user)),
    [authService]
  )

  const logIn = useCallback(
    async (username, password) =>
      authService
        .login(username, password)
        .then(setUser(username))
        .catch(console.error),
    [authService]
  )

  const logout = useCallback(
    async () => authService.logout().then(() => setUser(undefined)),
    [authService]
  )

  const context = useMemo(
    () => ({
      user,
      signUp,
      logIn,
      logout,
    }),
    [user, signUp, logIn, logout]
    // [user, signUp, logIn, logout]
  )

  return (
    <AuthContext.Provider value={context}>
      <App
        onLogin={logIn}
        authService={authService}
        authErrorEventBus={authErrorEventBus}
        postService={postService}
      />
      {/* {children} */}
      {/* {user ? children : <Login onLogin={logIn} user={user} />} */}
      {/* {user ? <App /> : <Login onLogin={logIn} user={user} />} */}
    </AuthContext.Provider>
  )
}

export class AuthErrorEventBus {
  listen(callback) {
    this.callback = callback
  }
  notify(error) {
    this.callback(error)
  }
}

export default AuthContext
export const fetchToken = () => contextRef.current

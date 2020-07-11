import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Loading from './Loading'
import axios from 'axios'
import Alert from './Alert'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState(null)
  let history = useHistory()
  const onSubmitHandler = async e => {
    try {
      setIsLoading(true)
      const res = await axios.post('https://mern-todo-backend17502.herokuapp.com/api/user/login', {
        email, password
      },
        {
          headers: { 'Content-Type': 'application/json' }
        })
      const {token,name,id}=res.data
      localStorage.setItem("token", token)
      localStorage.setItem("name",name)
      localStorage.setItem("id",id)
      history.push("/dashboard")

    } catch (err) {
      setIsLoading(false)
      return setError(err.response.data.message)
    }
  }
  return (
    <div>
      <div
        className="modal fade"
        id="modalLoginForm"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
          {isLoading && <Loading msg={"Logging you in..."}/>}
          {error && <Alert type="danger" message={error}/>}
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <i className="fas fa-envelope prefix grey-text" />
                <input
                  type="email"
                  id="defaultForm-email"
                  className="form-control validate"
                  value={email}
                  onChange={e => setEmail(e.target.value)} />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-email" >
                  Your email
            </label>
              </div>
              <div className="md-form mb-4">
                <i className="fas fa-lock prefix grey-text" />
                <input
                  type="password"
                  id="defaultForm-pass"
                  className="form-control validate"
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-pass" >
                  Your password
            </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button onClick={onSubmitHandler} className="btn btn-default">Login</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href
          className="btn btn-lg btn-outline-dark btn-rounded mb-4"
          data-toggle="modal"
          data-target="#modalLoginForm">
          Login
    </a>
      </div>
    </div>

  )
}

export default Login

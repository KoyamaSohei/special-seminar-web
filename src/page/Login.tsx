import React, { useState, useEffect, useContext, MouseEvent } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext, AuthStatus } from '../util/auth'
import { getToken } from '../util/grpc'
import { ResponseStatus } from '../proto/api_pb'

function Login() {
  const [id, changeId] = useState('');
  const [pass, changePass] = useState('');
  const [token, changeToken] = useState('');
  const [status, changeStatus] = useState(AuthStatus.INIT);
  const { Authenticated, update } = useContext(AuthContext);

  useEffect(() => {
    if (status === AuthStatus.SUCCESS) {
      update(id, token)
    }
  }, [status])

  async function tryLogin() {
    const res = await getToken(id, pass).catch((e) => console.error(e));
    if (!!res && res.status == ResponseStatus.OK) {
      changeToken(res.token);
      changeStatus(AuthStatus.SUCCESS);
      return;
    }
    changeStatus(AuthStatus.FAILED);
  }

  function handleSubmit(e: MouseEvent) {
    e.preventDefault()
    tryLogin()
  }

  if (Authenticated) {
    return (
      <Redirect
        to="/"
      />
    )
  }

  return (
    <div>
      <form className={status === AuthStatus.FAILED ? 'invalid' : ''}>
        <h3>Login</h3>
        <p>{status === AuthStatus.FAILED
            ? 'emailまたはパスワードが間違っています'
            : ''}</p>
        <input placeholder="email" type="text" value={id} onChange={e => changeId(e.target.value)} />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={pass}
          onChange={e => changePass(e.target.value)}
        />
        <button type="submit" onClick={e => handleSubmit(e)}>
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login;
import React, { useState, useEffect, useContext, MouseEvent } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext, AuthStatus } from '../util/auth'
import { createAccount } from '../util/grpc'
import { CreateAccountResponse } from '../proto/api_pb'

export default function Signup() {
  const [id, changeId] = useState('');
  const [pass, changePass] = useState('');
  const [token, changeToken] = useState('');
  const [status, changeStatus] = useState(AuthStatus.INIT)
  const { Authenticated, update } = useContext(AuthContext)

  useEffect(() => {
    if (status === AuthStatus.SUCCESS) {
      update(id, token)
    }
  }, [status])

  async function trySignup() {
    const res = await createAccount(id, pass).catch((e) => console.error(e));
    if (!!res && res.status == CreateAccountResponse.Status.OK) {
      changeToken(res.token);
      changeStatus(AuthStatus.SUCCESS);
      return;
    }
    changeStatus(AuthStatus.FAILED);
  }

  function handleSubmit(e: MouseEvent) {
    e.preventDefault()
    trySignup()
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
        <h3>Sign up</h3>
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
        Sign up 
        </button>
      </form>
    </div>
  )

}
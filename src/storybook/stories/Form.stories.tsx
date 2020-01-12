import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthStatus } from '../../util/auth'
import { Form, Title, ErrorDialog } from '../../components/Form'

export default {
  title: 'Form'
}

export const Login = () => {
  const [id, changeId] = useState('')
  const [pass, changePass] = useState('')
  const [status] = useState(AuthStatus.INIT)
  return (
    <Router>
      <Form className={status === AuthStatus.FAILED ? 'invalid' : ''}>
        <Title>Log in</Title>
        <ErrorDialog>
          {status === AuthStatus.FAILED
            ? 'emailまたはパスワードが間違っています'
            : ''}
        </ErrorDialog>
        <input placeholder="email" type="text" value={id} onChange={e => changeId(e.target.value)} />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={pass}
          onChange={e => changePass(e.target.value)}
        />
        <button type="submit">
          Log in
        </button>
      </Form>
    </Router>
  )
}

export const Signup = () => {
  const [id, changeId] = useState('')
  const [pass, changePass] = useState('')
  const [status] = useState(AuthStatus.INIT)
  return (
    <Router>
      <Form className={status === AuthStatus.FAILED ? 'invalid' : ''}>
        <Title>Sign up</Title>
        <ErrorDialog>
          {status === AuthStatus.FAILED
            ? 'このidは既に使われています'
            : ''}
        </ErrorDialog>
        <input placeholder="email" type="text" value={id} onChange={e => changeId(e.target.value)} />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={pass}
          onChange={e => changePass(e.target.value)}
        />
        <button type="submit">
          Sign up
        </button>
      </Form>
    </Router>
  )
}
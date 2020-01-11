import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../util/auth'

export default function Header() {
  const { Authenticated } = useContext(AuthContext);
  if (!Authenticated) {
    return (
      <header>
        <Link to="/">
          <h1>special seminar</h1>
        </Link>
        <div>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Log in</Link>
        </div>
      </header>
    )
  }
  return (
    <header>
      <Link to="/">
        <h1>special seminar</h1>
      </Link>
    </header>
  )
}
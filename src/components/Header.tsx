import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../util/auth'

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 68px;
  padding: 13px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
`

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 896px) {
    display: grid;
    width: 60%;
    overflow-x: scroll;
    grid-auto-flow: column;
    & > a {
      white-space: nowrap;
    }
  }
`

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
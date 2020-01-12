import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { HeaderWrapper, MenuWrapper } from '../../components/Header'
import StyledLink from '../../components/StyledLink'

export default {
  title: 'Header'
}

export const Authenticated = () => {
  return (
    <Router>
      <HeaderWrapper>
        <h1>special seminar</h1>
        <MenuWrapper>
          <StyledLink to="/signout">Signout</StyledLink>
        </MenuWrapper>
      </HeaderWrapper>
    </Router>
  )
}

export const NotAuthenticated = () => {
  return (
    <Router>
      <HeaderWrapper>
        <h1>special seminar</h1>
        <MenuWrapper>
          <StyledLink to="/signup">Sign up</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </MenuWrapper>
      </HeaderWrapper>
    </Router>
  )
}
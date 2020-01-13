import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../util/auth'

export default function Signout() {
  const { update } = useContext(AuthContext)
  useEffect(() => {
    update('', '');
  });
  return (<Redirect to="/" />)
}
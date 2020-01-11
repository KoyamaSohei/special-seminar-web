import { createContext,useState } from 'react';
import { Auth, updateAuth } from './types'

export const AuthContext = createContext<Auth & { update: updateAuth }>({
  id: '',
  Authenticated: false,
  loaded: false,
  token: '',
  update: () => {
    console.log('update')
  }
})

export function useAuth(): [Auth, updateAuth] {
  const [auth, changeAuth] = useState<Auth>({
    id: '',
    Authenticated: false,
    loaded: false,
    token: ''
  })
  function update(id: string, token: string) {
    changeAuth({
      id,
      token,
      loaded: true,
      Authenticated: !!id
    })
  }
  return [auth, update]
}


export enum AuthStatus {
  INIT,
  SUCCESS,
  FAILED
}
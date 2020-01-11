export type Auth = {
  id: string
  Authenticated: boolean
  loaded: boolean
  token: string
}
export type updateAuth = (id: string, token: string) => void

export type TokenInfo = {
  exp: number
  iat: number
  sub: string
}
import React from 'react'
import { render } from 'react-dom';
import { client } from './grpc'

function App() {
  console.log(client)
  return <div>hello, react</div>
}

render(<App />, document.querySelector('#app'))
import React, { useEffect } from 'react'
import { render } from 'react-dom';
import { ping } from './grpc'

function App() {
  useEffect(() => {
    (async() => {
      const text = await ping('world').catch((e) => console.error(e));
      console.log(text);
    })();
  },[]);
  return <div>hello, react</div>
}

render(<App />, document.querySelector('#app'))
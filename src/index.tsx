import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useAuth, AuthContext } from './util/auth'
import Header from './components/Header'
import Main from './page/Main'
import Login from './page/Login'
import Signup from './page/Signup'
import Signout from './page/Signout'
import RecordManager from './page/RecordManager'

function App() {
  const [auth, update] = useAuth()
  return (
    <>
      <AuthContext.Provider value={{ ...auth, update }}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/signout" exact component={Signout} />
            <Route path="/domains/:name([0-9a-z.]+)" exact component={RecordManager} />
            <Redirect to='/' />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </>
  )
}

render(<App />, document.querySelector('#app'))
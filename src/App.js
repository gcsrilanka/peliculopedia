import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import HomePage from './screens/HomePage'
import LoginPage from './screens/LoginPage'
import AboutUsPage from './screens/AboutUsPage'
import NotFound from './screens/NotFound'
import NavBarLayout from './common/NavBar'
import firebase from './firebase'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact>
          <LoginPage />
        </Route>
        <NavBarLayout>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/about' exact>
            <AboutUsPage />
          </Route>
          <Route component={NotFound} />
        </NavBarLayout>
      </Switch>
    </Router>
  )
}

export default App

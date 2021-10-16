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

function App () {
  return (
    <Router>
      <NavBarLayout>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/about' exact>
            <AboutUsPage />
          </Route>
          <Route path='/login' exact>
            <LoginPage />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </NavBarLayout>
    </Router>
  )
}

export default App

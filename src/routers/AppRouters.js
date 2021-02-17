import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import Dashboard from '../components/Dashboard'
import Registration from '../components/Registration'

const AppRouters = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={LoginPage} exact={true} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/forms' component={Registration} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default AppRouters

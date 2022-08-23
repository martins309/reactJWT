import React from 'react'
import { Redirect, Switch, Route, Router } from 'react-router-dom'
import { history } from './helpers/history'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { RouteGuard } from './src/components/RouteGuard'

export const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <RouteGuard
                    exact
                    path='/'
                    component={HomePage}
                
                />
                <Route 
                    path='/Login'
                    component={LoginPage}
                />
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}
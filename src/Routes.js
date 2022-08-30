import React from 'react'
import { Redirect, Route, Router } from 'react-router-dom'
import { history } from './helpers/history'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const Routes = () => {
    return (
        <Router history={history}>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={<HomePage/>}
                
                />
                <Route 
                    path='Login'
                    element={<LoginPage />}
                />
                <Redirect to='/' />
            </Routes>
        </Router>
    )
}


export default Routes
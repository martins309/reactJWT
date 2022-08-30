import React from 'react'
import { Route, Router, BrowserRouter } from 'react-router-dom'
import { history } from './helpers/history'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const Routes = () => {
    return (
        <Router history={history}>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage/>}
                
                />
                <Route 
                    path='Login'
                    element={<LoginPage />}
                />
            </Routes>
        </Router>
    )
}


export default Routes
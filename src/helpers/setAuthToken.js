import axios from 'axios'

export const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
    else 
        delete axios.default.headers.common["Authorization"] 
}
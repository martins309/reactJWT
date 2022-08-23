import axios from "axios"

export const handleSubmit = (email, pass) => {
    //sample user regristration using reqres
    const loginPayload = {
        email: 'eve.holy@reqres.in',
        password: 'cityslicka'
    }

    axios.post("https://reqres.in/api/login", loginPayload)
        .then(response => {
            //get token from response
            const token = response.data.tokken

             //set JWT token to local 
             localStorage.setItem('token', token)

             //set token to axios common header
             setAuthToken(token)
 
             //redirect user to home page
             window.location.href = '/'
        })
        .catch(err => console.log(err))
}
import axios from "axios"
import { setAuthToken } from "../helpers/setAuthToken"
const LoginPage = () => {

   const handleSubmit = (email, password) => {
        //sample user regristration using reqres
        const loginPayload = {
            email: email,
            password: password
        }
    
        axios.post("https://reqres.in/api/login", loginPayload)
            .then(response => {
                //get token from response
                const token = response.data.token
    
                 //set JWT token to local 
                 localStorage.setItem('token', token)
    
                 //set token to axios common header
                 setAuthToken(token)
     
                 //redirect user to home page
                 window.location.href = '/'
            })
            .catch(err => console.log(err))
    }


    return (
        <form
        onSubmit={(e) => {
            e.preventDefault()
            const [email, password] = e.target.children 
            handleSubmit(email, password)
        }}
        >
        <label>Email</label><br/>
        <input type='name' name='name' id='name'></input><br/>
        <label>Password</label><br/>
        <input type='password' name='password' id='password'></input><br/>
        <input type='submit' value='submit' ></input><br/>
        </form>
    )

}

export default LoginPage
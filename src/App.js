import {setAuthToken} from './helpers/setAuthToken'
import LoginPage from './pages/LoginPage';

function App() {

  //checks jwt token
  const token = localStorage.getItem("token")
  if(token){
    setAuthToken(token)
  }

  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;

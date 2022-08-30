import Routes from './Routes'
import {setAuthToken} from './helpers/setAuthToken'

function App() {

  //checks jwt token
  const token = localStorage.getItem("token")
  if(token){
    setAuthToken(token)
  }

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;

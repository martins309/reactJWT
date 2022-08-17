import logo from './logo.svg';
import './App.css';
import { RouteGuard } from './components/RouteGuard';


function App() {
  return (
    <div className="App">
      <RouteGuard />
    </div>
  );
}

export default App;

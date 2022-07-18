import './App.css';
import NavBar from '../component/navBar';
import Home from "../component/home/index"
function App() {
  return (
    <div className='container'>
        <div className="navBarContainer">
          <NavBar
            setBtnsList = {['signIn']}
          />
        </div>
        <div className="content">
          <Home/>
        </div>
    </div>
  );
}

export default App;

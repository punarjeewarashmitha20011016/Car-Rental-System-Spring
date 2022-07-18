import './App.css';
import NavBar from '../component/navBar';
function App() {
  return (
    <div className='container'>
        <div className="navBarContainer">
          <NavBar
            setBtnsList = {['signIn']}
          />
        </div>
        <div className="content"></div>
    </div>
  );
}

export default App;

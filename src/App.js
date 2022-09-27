import MainContainer from './Components/MainContainer'
import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';
import './App.css'
function App() {
  return (
    <div className="App">
    <NavBar/>
    <div className='parentContainer'> 
    <SideBar/>
    <MainContainer/>
    </div>

   
  
    </div>
  );
}

export default App;

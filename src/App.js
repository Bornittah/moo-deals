import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar.js';
import Home from './components/Home.js';
import Cattles from './components/Cattles.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
     <NavigationBar/>
     <Home/>
     <Cattles/>
     <Footer/>
    </div>
  );
}

export default App;

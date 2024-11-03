import logo from './logo.svg';
import './App.css';
import Mainpage from './mainpage';
import Signup from './signup';
import Login from './login';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='Loginpage' element={<Login/>} />
      <Route path='Homepage' element={<Mainpage/>} />
     </Routes>
     
    </div>
  );
}

export default App;

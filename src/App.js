
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';

import Login from './components/login/login';
import Header from "./components/Header/header";

function App() {
  return (
    <div className='="App'>
      
        <Header />
             <Login />
    </div>
  
  );
}

export default App;

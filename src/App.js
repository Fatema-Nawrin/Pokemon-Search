import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Layout/Home';
import NavBar from './Layout/NavBar';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>

  );
}

export default App;

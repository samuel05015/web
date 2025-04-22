
import './App.css';
import { BrowserRouter, Routes, Route } from
'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Contact from './screens/Contact';
import About from './screens/About';
import NavBar from './componentes/NavBar';
import Register from './screens/Register';    

 
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <BrowserRouter>
      <NavBar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/register' element={<Register/>} /> 
          </Routes>
        </div>
      </BrowserRouter>
        <p>
          Melhor Burguer do Muundo
        </p>
       </header>
    </div>
  );
}
 
export default App;
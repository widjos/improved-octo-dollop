import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar }from './components/Navigation'
import  { Vot }  from './components/Table'
import { Welcome } from './components/welcome'
import { Top } from './components/Top5'
import { Porcentaje } from './components/Porcentajes';
import { Last5 } from './components/Ultimos5';
import { Sede } from './components/SedesMayorVoto';

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/data" element={<Vot />} />
          <Route exact path="/top5" element={<Top />} />
          <Route exact path="/porcentaje" element={<Porcentaje />} />
          <Route exact path="/ultimos" element={<Last5 />} />
          <Route exact path="/sede" element={<Sede />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

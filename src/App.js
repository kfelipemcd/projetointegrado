import Home from './components/Home'
import Sobre from './components/Sobre'
import Carros from './components/Carros'
import Alunos from './components/Alunos'
import Alunos2 from './components/Alunos2'
import ListaAlunos from './components/ListaAlunos'
import {BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Minha aplicação React</h1>
      <BrowserRouter>
      <Nav variant="tabs">
        <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
        <Nav.Link as={Link} to="/alunos">Cadastro de Alunos</Nav.Link>
        <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
        <Nav.Link as={Link} to="/carros">Carros</Nav.Link>
      </Nav>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/alunos' element={<Alunos2/>} ></Route>
        <Route path='/sobre' element={<Sobre/>} ></Route>
        <Route path='/carros' element={<Carros/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

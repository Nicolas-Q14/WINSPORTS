import {BrowserRouter as Router,Route,Routes,Link } from'react-router';
import Home from './components/Home'
import Favoritos from './components/Favoritos'
import Original from './components/Original'
import Informativa from './components/Informativa'
import Usuarios from './components/Usuarios'
import Equipo from './components/Equipo'

function App() {
  return (
    <Router>
      <Routes>

      <Route path="/"element={<Home/>}/>
      <Route path="/Favoritos"element={<Favoritos/>}/>
      <Route path="/Original"element={<Original/>}/>
      <Route path="/Informativa"element={<Informativa/>}/>
      <Route path="/Usuarios"element={<Usuarios/>}/>
      <Route path="/Equipo"element={<Equipo/>}/>

      </Routes>
      <Link to ="/Home">Home</Link>
      <Link to ="/Favoritos">Favoritos</Link>
      <Link to ="/Original">Original</Link>
      <Link to ="/Informativa">Informativa</Link>
      <Link to ="/Usuarios">Usuarios</Link>
      <Link to ="/Equipo">Equipo</Link>
    </Router>

  )
}

export default App

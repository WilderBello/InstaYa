import "./App.css";
import ListaUsuarios from "./ListaUsuarios";
import AgregarUsuario from "./AgregarUsuario";
import EditarUsuario from "./EditarUsuario";
import Inicio from './Inicio';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/envios" element={<ListaUsuarios />} exact/>
          <Route path="/agregarenvio/" element={<AgregarUsuario />} exact />
          <Route exact path="/" element={<Inicio />} />
          <Route path="/editarenvio/:idusuario" element={<EditarUsuario />} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

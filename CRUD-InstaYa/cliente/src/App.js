import logo from "./logo.svg";
import "./App.css";
import ListaUsuarios from "./ListaUsuarios";
import AgregarUsuario from "./AgregarUsuario";
import EditarUsuario from "./EditarUsuario";
import Login from './Login';
import Inicio from './Inicio';
import Registro from './Registro';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/envios" element={<ListaUsuarios />} exact></Route>
          <Route
            path="/agregarusuario/"
            element={<AgregarUsuario />}
            exact
          ></Route>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route
            path="/editarusuario/:idusuario"
            element={<EditarUsuario />}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

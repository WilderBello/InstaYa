import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Login';
import Inicio from './Inicio';
import Registro from './Registro';
import PagPrin from './PagPrin';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route exact path="/" element={<Inicio/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Registro" element={<Registro/>} />
      <Route path="/Envios" element={<PagPrin/>} />
    </Routes>
  </Router>
</React.StrictMode>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

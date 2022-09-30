import axios from "axios";
import React, { useEffect, useState } from "react";
import UsuarioIndividual from "./UsuarioIndividual";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function ListaUsuarios() {
  const [datausuarios, setdatausuarios] = useState([]);

  useEffect(() => {
    axios
      .get("api/usuario/obtenerusuarios")
      .then((res) => {
        console.log(res.data);
        setdatausuarios(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //Mapear listausuario en objeto usuario
  const listausuarios = datausuarios.map((usuario) => {
    return (
      <div>
        <UsuarioIndividual usuario={usuario} />
      </div>
    );
  });
  const navegar = useNavigate();
  //funcion borrar usuario
  function borrarusuario(idusuario) {
    axios
      .post("/api/usuario/borrarusuario", { idusuario: idusuario })
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        navegar(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  return (
    isAuthenticated && (
      <div id="wrapper">
        <ul
          class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <img
            src="img/Logo2.png"
            className="d-block  mx-auto"
            width="120"
            height="120"
            alt="img 1"
          />
          <div class="sidebar-brand">InstaYa</div>

          <hr class="sidebar-divider" />

          <div class="sidebar-heading">Contacto y demas</div>

          <li class="nav-item">
            <a class="nav-link" href="/#Contactanos">
              <i class="fas fa-fw fa-phone"></i>
              <span>Contactanos</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/#Comunicado">
              <i class="fas fa-fw fa-mail-bulk"></i>
              <span>Informacion y comunicados</span>
            </a>
          </li>

          <hr class="sidebar-divider" />

          <div class="sidebar-heading"></div>

          <li class="nav-item active">
            <a class="nav-link" href="/envios">
              <i class="fas fa-fw fa-person-booth"></i>
              <span>Envios</span>
            </a>
          </li>

          <hr class="sidebar-divider d-none d-md-block" />
        </ul>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <ul class="navbar-nav ml-auto">
                <div class="topbar-divider d-none d-sm-block"></div>

                <li class="nav-item dropdown no-arrow">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                      {user.name}
                    </span>
                    <img
                      class="img-profile rounded-circle"
                      src={user.picture}
                    />
                  </a>

                  <div
                    class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>

            <div class="container-fluid">
              <h1 class="h3 mb-2 text-red">Envios InstaYa</h1>
              <p class="mb-4">
                Como usuario puedes crear y editar ordenes 😁✈️
                <p>InstaYa tu empresa de envios!</p>
              </p>

              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h5
                    class="mb-4 font-weight-bold text-primary text-center"
                    id="TitEnv"
                  >
                    Envios Realizados
                  </h5>
                  <a className="btn btn-primary col-12" href="agregarenvio">
                    Nuevo Envio
                  </a>
                </div>

                <div class="card-body">
                  <div class="table table-responsive">
                    <table
                      class="table table-striped"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead className="table table-dark">
                        <tr>
                          <th className="text-md-center"># Servicio</th>
                          <th className="text-md-center">Fecha</th>
                          <th className="text-md-center">Ciudad Entrega</th>
                          <th className="text-md-center">Direccion Entrega</th>
                          <th className="text-md-center">Estado</th>
                          <th className="text-md-center">Editar</th>
                          <th className="text-md-center">Eliminar</th>
                        </tr>
                      </thead>
                      <tbody>
                        {datausuarios.map((usuario) => (
                          <tr key={usuario}>
                            <td>{usuario.idusuario}</td>
                            <td>{usuario.fecha}</td>
                            <td>{usuario.ciudad_entrega}</td>
                            <td>{usuario.direccion_entrega}</td>
                            <td>{usuario.estado}</td>
                            <td>
                              <Link to={`/editarenvio/${usuario.idusuario}`}>
                                <li className="btn btn-success">Editar</li>
                              </Link>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  borrarusuario(usuario.idusuario);
                                }}
                              >
                                Eliminar
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer class="sticky-footer bg-white">
            <div class="container my-auto">
              <div class="copyright text-center my-auto">
                <span>Copyright &copy; InstaYa Envios 2022</span>
              </div>
            </div>
          </footer>
        </div>
        <div
          class="modal fade"
          id="logoutModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  class="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                Seleccione "Logout"  si está listo para
                finalizar su actual sesión.
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => logout({ returnTo: window.origin })}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ListaUsuarios;

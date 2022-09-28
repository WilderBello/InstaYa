import React from "react";

export default function PagPrin() {
  return (
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
          <a class="nav-link" href="#">
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
          <a class="nav-link" href="/Envios">
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
                    Usuario
                  </span>
                  <img
                    class="img-profile rounded-circle"
                    src="img/undraw_profile.svg"
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
                <h5 class="mb-4 font-weight-bold text-primary text-center" id="TitEnv">
                  Envios Realizados
                </h5>
                <button class="btn btn-primary col-12" href="#" data-toggle="modal" data-target="#dialogoNuevoPedido">Nuevo Envio</button>
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
                        <th className="text-center">Servicio</th>
                        <th className="text-center">Fecha</th>
                        <th className="text-center">Ciudad Entrega </th>
                        <th className="text-center">Direccion Entrega</th>
                        <th className="text-center">Estado</th>
                        <th className="text-center">Editar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="text-center">1</th>
                        <td className="text-center">19/09/2022</td>
                        <td className="text-center">Sincelejo</td>
                        <td className="text-center">Calle 17 #40-30</td>
                        <td className="text-center">Pendiente</td>
                        <td className="text-center">
                          <button class="btn btn-info">Editar</button>
                        </td>
                      </tr>
                      <tr>
                        <th className="text-center">2</th>
                        <td className="text-center">20/09/2022</td>
                        <td className="text-center">Bogota</td>
                        <td className="text-center">Calle 107 #50-29</td>
                        <td className="text-center">Pendiente</td>
                        <td className="text-center">
                          <button class="btn btn-info" href="#" data-toggle="modal" data-target="#dialogoEditar">Editar</button>
                        </td>
                      </tr>
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
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a class="btn btn-primary" href="/">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="dialogoEditar" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exModalLabel">Editar Envio</h5>
              <button type="button" class="close" name="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="fecha">Fecha:</label>
                      <input type="date" class="form-control" id="fecha" />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="hora">Hora:</label>
                      <input type="time" class="form-control" id="hora" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="estado">Estado:</label>
                    <select class="form-control" id="estado">
                      <option>Guardado</option>
                      <option>Pendiente</option>
                    </select>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-3">
                      <label for="largo">Largo:</label>
                      <input type="number" class="form-control" id="largo" />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="ancho">Ancho:</label>
                      <input type="number" class="form-control" id="ancho" />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="alto">Alto:</label>
                      <input type="number" class="form-control" id="alto" />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="peso">Peso:</label>
                      <input type="number" class="form-control" id="peso" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="direccionRecogida">Direccion Recogida:</label>
                    <input type="text" class="form-control form-control-sm" id="direccionRecogida" />
                  </div>
                  <div class="form-group">
                    <label for="ciudadRecogida">Ciudad Recogida:</label>
                    <input type="text" class="form-control form-control-sm" id="ciudadRecogida" />
                  </div>
                  <div class="form-group">
                    <label for="nombre">Nombre Destinatario:</label>
                    <input type="text" class="form-control form-control-sm" id="nombre" />
                  </div>
                  <div class="form-group">
                    <label for="cedula">Cédula/Nit Destinatario:</label>
                    <input type="text" class="form-control form-control-sm" id="cedula" />
                  </div>
                  <div class="form-group">
                    <label for="direccionEntrega">Direccion Entrega:</label>
                    <input type="text" class="form-control form-control-sm" id="direccionEntrega" />
                  </div>
                  <div class="form-group">
                    <label for="ciudadEntrega">Ciudad Entrega:</label>
                    <input type="text" class="form-control form-control-sm" id="ciudadEntrega" />
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="#">Aceptar</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="dialogoNuevoPedido" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exModalLabelEnvio">Nuevo Envio</h5>
              <button type="button" class="close" name="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="fecha">Fecha:</label>
                      <input type="date" class="form-control" id="fechaEnvio" />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="hora">Hora:</label>
                      <input type="time" class="form-control" id="horaEnvio" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-3">
                      <label for="largo">Largo:</label>
                      <input type="number" class="form-control" id="largoEnvio" />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="ancho">Ancho:</label>
                      <input type="number" class="form-control" id="anchoEnvio" />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="alto">Alto:</label>
                      <input type="number" class="form-control" id="altoEnvio" />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="peso">Peso:</label>
                      <input type="number" class="form-control" id="pesoEnvio" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="direccionRecogida">Direccion Recogida:</label>
                    <input type="text" class="form-control form-control-sm" id="direccionRecogidaEnvio" />
                  </div>
                  <div class="form-group">
                    <label for="ciudadRecogida">Ciudad Recogida:</label>
                    <input type="text" class="form-control form-control-sm" id="ciudadRecogidaEnvio" />
                  </div>
                  <div class="form-group">
                    <label for="nombre">Nombre Destinatario:</label>
                    <input type="text" class="form-control form-control-sm" id="nombreEnvio" />
                  </div>
                  <div class="form-group">
                    <label for="cedula">Cédula/Nit Destinatario:</label>
                    <input type="text" class="form-control form-control-sm" id="cedulaEnvio" />
                  </div>
                  <div class="form-group">
                    <label for="direccionEntrega">Direccion Entrega:</label>
                    <input type="text" class="form-control form-control-sm" id="direccionEntregaEnvio" />
                  </div>
                  <div class="form-group">
                    <label for="ciudadEntrega">Ciudad Entrega:</label>
                    <input type="text" class="form-control form-control-sm" id="ciudadEntregaEnvio" />
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="#">Registrar</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

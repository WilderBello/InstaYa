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
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-text mx-3">InstaYa Envios</div>
        </a>

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
            <h1 class="h3 mb-2 text-gray-800">Tables</h1>
            <p class="mb-4">
              DataTables is a third party plugin that is used to generate the
              demo table below. For more information about DataTables, please
              visit the{" "}
              <a target="_blank" href="https://datatables.net">
                official DataTables documentation
              </a>
              .
            </p>

            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h5 class="m-0 font-weight-bold text-primary" id="TitEnv">
                  Envios Realizados
                </h5>
                <a class="btn btn-primary" href="#" id="btnEnvio">
                  Nuevo Envio
                </a>
              </div>

              <div class="card-body">
                <div class="table-responsive">
                  <table
                    class="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
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
    </div>
  );
}

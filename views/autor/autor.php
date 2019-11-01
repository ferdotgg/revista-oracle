<div class="card text-white bg-gradient-info text-center">
        <div class="card-content d-flex">
          <div class="card-body">
            <img src="app-assets/images/autores/autor.svg" alt="element 03" width="150" height="150" class="float-right px-1">
            <h4 class="card-title text-white mt-3">Listado de autores</h4>
            <p class="card-text">Aquí podrás administrar los diferentes autores que tenemos</p>
          </div>
        </div>
      </div>

<!-- Zero configuration table -->
<section id="basic-datatable">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                <button class="btn bg-gradient-info" type="button" name="button" data-toggle="modal" data-target="#mGuardar" onclick="limpiar();">Agregar autor</button>
                                </div>
                                <div class="card-content">
                                    <div class="card-body card-dashboard">
                                    <div class="table-responsive">
                                            <table id="tabla" class="table">
                                              <thead>
                                                  <tr>
                                                      <th>ID autor</th>
                                                      <th>Nombre del autor</th>
                                                      <th>Primer apellido</th>
                                                      <th>Segundo apellido</th>
                                                      <th>Correo electrónico</th>
                                                      <th>Adscripción</th>
                                                      <th>Posición</th>
                                                      <th></th>
                                                  </tr>
                                              </thead>
                                               <tbody>
                                               </tbody>
                                           </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="basic-datatable">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3>Auditoria</h3>
                                </div>
                                <div class="card-content">
                                    <div class="card-body card-dashboard">
                                    <div class="table-responsive">
                                            <table id="tablaAuditoria" class="table">
                                              <thead>
                                                  <tr>
                                                      <th>Usuario</th>
                                                      <th>Fecha</th>
                                                      <th>ID autor</th>
                                                      <th>Nombre del autor</th>
                                                      <th>Primer apellido</th>
                                                      <th>Segundo apellido</th>
                                                      <th>Correo electrónico</th>
                                                      <th>Adscripción</th>
                                                      <th>Posición</th>
                                                  </tr>
                                              </thead>
                                               <tbody>
                                               </tbody>
                                           </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <?php include("views/autor/modal.php");?>
<!--/ Zero configuration table -->
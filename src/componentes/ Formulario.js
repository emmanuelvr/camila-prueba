import React from "react";

const Formulario = ({ onSubmit, nextStep }) => {
  function enviar() {
    const user = {
      name: "New name",
      email: "newameil@asd.com"
    };
    onSubmit(user);
    nextStep();
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="input-group-append">
              <input
                className="form-control"
                type="text"
                name="nombre"
                placeholder="Nombre"
              />
              <div className="input-group-append">
                <input
                  className="form-control"
                  type="number"
                  name="cedula"
                  placeholder="Cedula"
                />
              </div>
              <div className="input-group-append">
                <input className="form-control" type="date" name="fecha" />
              </div>
              <div className="input-group-append">
                <input
                  className="form-control"
                  type="text"
                  name="pais"
                  placeholder="Pais"
                />
              </div>
              <div className="input-group-append" name="comentario">
                <textarea className="form-control"></textarea>
              </div>

              <button
                className="btn btn-primary"
                type="submit"
                onClick={enviar}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formulario;

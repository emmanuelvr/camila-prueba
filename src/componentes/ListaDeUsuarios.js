import React from "react";

const ListaDeUsuarios = ({ usuarios }) => {
  return (
    <div>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeUsuarios;

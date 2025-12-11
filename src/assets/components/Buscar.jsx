import React from "react";

function Buscar({ buscar, setBuscar }) {
  return (
    <input
      type="text"
      placeholder="Buscar por nombre o teléfono"
      value={buscar}
      onChange={(e) => setBuscar(e.target.value)}
    />
  );
}

export default Buscar;

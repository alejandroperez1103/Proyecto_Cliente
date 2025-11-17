import React from "react";

function Paginacion({ totalPaginas, paginaActual, setPaginaActual }) {
  return (
    <div>
      {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          onClick={() => setPaginaActual(num)}
          disabled={num === paginaActual}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Paginacion;

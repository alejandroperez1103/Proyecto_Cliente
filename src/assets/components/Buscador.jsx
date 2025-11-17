import { useState } from "react";
import clientesIniciales from "./clientes.js";
import Buscar from "./Buscar.jsx";
import FiltrarClientes from "./Filtar.jsx";
import Paginacion from "./Paginacion.jsx";

function Buscador() {
  const [buscar, setBuscar] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [resultadosPorPagina, setResultadosPorPagina] = useState(5);

  const filtradoCliente = clientesIniciales.filter((cliente) => {
    const texto = buscar.toLowerCase();
    return (
      cliente.nombre.toLowerCase().includes(texto) ||
      cliente.telefono.includes(texto)
    );
  });

  const indexUltimo = paginaActual * resultadosPorPagina;
  const indexPrimero = indexUltimo - resultadosPorPagina;
  const clientesPaginados = filtradoCliente.slice(indexPrimero, indexUltimo);
  const totalPaginas = Math.ceil(filtradoCliente.length / resultadosPorPagina);

  return (
    <div>
      <h1>Buscador de Clientes</h1>
      <Buscar buscar={buscar} setBuscar={setBuscar} />
      <FiltrarClientes filtradoCliente={clientesPaginados} />
      <div>
        <label>Resultados por página: </label>
        <select
          value={resultadosPorPagina}
          onChange={(e) => {
            setResultadosPorPagina(Number(e.target.value));
            setPaginaActual(1);
          }}
        >
          <option value={3}>3</option>
          <option value={6}>6</option>
          <option value={10}>10</option>
        </select>
      </div>
      <Paginacion
        totalPaginas={totalPaginas}
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
      />
    </div>
  );
}

export default Buscador;

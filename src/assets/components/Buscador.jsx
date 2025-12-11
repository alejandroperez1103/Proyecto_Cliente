import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import clientesIniciales from "./Clientes.js";
import Buscar from "./Buscar.jsx";
import FiltrarClientes from "./FiltrarClientes.jsx";
import Paginacion from "./Paginacion.jsx";

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio."),
  telefono: yup.string()
    .matches(/^[0-9]+$/, "El teléfono debe ser solo números.") 
    .min(9, "El teléfono debe tener al menos 9 dígitos.")
    .required("El teléfono es obligatorio."),
});

function Buscador() {
  const [clientes, setClientes] = useState(clientesIniciales);
  const [buscar, setBuscar] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [resultadosPorPagina, setResultadosPorPagina] = useState(5);
  const [idEdicion, setIdEdicion] = useState(null);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    if (idEdicion === 0) {
      const nuevoId = clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) + 1 : 1;
      setClientes([...clientes, { id: nuevoId, ...data }]);
    } else {
      setClientes(clientes.map(c => c.id === idEdicion ? { ...c, ...data } : c));
    }
    cerrarFormulario();
  };

  const abrirCrear = () => {
    setIdEdicion(0);
    reset({ nombre: "", telefono: "" });
  };

  const abrirEditar = (cliente) => {
    setIdEdicion(cliente.id);
    setValue("nombre", cliente.nombre);
    setValue("telefono", cliente.telefono);
  };

  const cerrarFormulario = () => {
    setIdEdicion(null);
    reset();
  };

  const filtradoCliente = clientes.filter((cliente) => {
    const texto = buscar.toLowerCase();
    return cliente.nombre.toLowerCase().includes(texto) || cliente.telefono.includes(texto);
  });

  const indexUltimo = paginaActual * resultadosPorPagina;
  const indexPrimero = indexUltimo - resultadosPorPagina;
  const clientesPaginados = filtradoCliente.slice(indexPrimero, indexUltimo);
  const totalPaginas = Math.ceil(filtradoCliente.length / resultadosPorPagina);

  return (
    <div className="contenedor-buscador">
      <h1>Gestión de Clientes</h1>

      {}
      {idEdicion === null && (
        <button onClick={abrirCrear} className="btn-anadir">Añadir cliente</button>
      )}

      {}
      {idEdicion !== null && (
        <form onSubmit={handleSubmit(onSubmit)} className="formulario">
          <h3>{idEdicion === 0 ? "Nuevo Cliente" : "Editar Cliente"}</h3>
          
          <div className="campo">
            <label>Nombre:</label>
            <input {...register("nombre")} />
            <p className="error">{errors.nombre?.message}</p> {}
          </div>

          <div className="campo">
            <label>Teléfono:</label>
            <input {...register("telefono")} />
            <p className="error">{errors.telefono?.message}</p> {}
          </div>

          <div className="botones-form">
            <button type="submit">Guardar</button>
            <button type="button" onClick={cerrarFormulario} style={{backgroundColor: '#ccc'}}>Cancelar</button>
          </div>
        </form>
      )}

      <Buscar buscar={buscar} setBuscar={setBuscar} />

      {}
      <FiltrarClientes 
        filtradoCliente={clientesPaginados} 
        onEditar={abrirEditar} 
      />

      <div className="selector-paginacion">
        <label>Resultados por página: </label>
        <select
          value={resultadosPorPagina}
          onChange={(e) => { setResultadosPorPagina(Number(e.target.value)); setPaginaActual(1); }}
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
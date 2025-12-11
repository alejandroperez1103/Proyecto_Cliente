import React from "react";

function FiltrarClientes({ filtradoCliente, onEditar }) {
  return (
    <div className="tabla-clientes">
      {filtradoCliente.length > 0 ? (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Nombre</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Teléfono</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtradoCliente.map((cliente) => (
              <tr key={cliente.id}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{cliente.nombre}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{cliente.telefono}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>
                  {}
                  <button onClick={() => onEditar(cliente)}>
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No se encontraron clientes.</p>
      )}
    </div>
  );
}

export default FiltrarClientes;
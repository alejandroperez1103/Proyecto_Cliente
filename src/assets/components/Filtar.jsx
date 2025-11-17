function FiltrarClientes({ filtradoCliente }) {
    return (
        <div>
    {filtradoCliente.length > 0 ? (
        filtradoCliente.map((cliente) => (
          <div key={cliente.id} className="cliente">
            <p><strong>Nombre:</strong> {cliente.nombre}</p>
            <p><strong>Teléfono:</strong> {cliente.telefono}</p>
          </div>
        ))
        ) : (
            <p>No se encontraron clientes.</p>
        )}
        </div>
    );
}

export default FiltrarClientes;
    

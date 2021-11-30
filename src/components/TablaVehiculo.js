import React from 'react'
import './Tabla.css'

class TablaVehiculo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Numero Pedido</th>
              <th>Bastidor</th>
              <th>Modelo</th>
              <th>Matricula</th>
              <th>Fecha de entrega</th>
            </tr>
          </thead>
          <tbody>
            {this.props.lista.map((vehiculo) => (
              <tr>
                <td>{vehiculo.numeroPedido}</td>
                <td>{vehiculo.bastidor}</td>
                <td>{vehiculo.modelo}</td>
                <td>{vehiculo.matricula}</td>
                <td>{vehiculo.fechaEntrega}</td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TablaVehiculo
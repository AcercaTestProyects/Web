import React from 'react'
import TablaVehiculo from '../components/TablaVehiculo'

class Vehiculo extends React.Component {

  constructor(props) {
    super(props)
    this.state = { vehiculos: [] }
  }

  componentWillMount() {
    fetch('http://localhost:55827/api/getVehicles/readVehicles')
    .then((response) => {
      return response.json()
    })
    .then((vehiculos) => {
      this.setState({ vehiculos: vehiculos.value });
    })
  }

  render() {
    if (this.state.vehiculos.length > 0) {

      return(
        <div className="container">
          <TablaVehiculo lista={this.state.vehiculos} />
        </div>
      );    
    } else {
      return <p className="text-center">Cargando vehiculos...</p>
    }
  }
}

export default Vehiculo
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {mudarTexto} from './actions/appActions'

class App extends Component {
  mudarTexto() {
    this.props.dispatch(mudarTexto('Novo texto!!!'))
  }
  render() {
    return (
      <div>
        <h1>{this.props.texto}</h1>
        <button onClick={() => this.mudarTexto()}>Mudar texto</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { texto } = state;
  return {
    texto
  }
}

export default connect(mapStateToProps)(App)

// export default connect(store => {
//   texto: store.texto
// })(App)
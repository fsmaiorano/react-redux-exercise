import React, { Component } from 'react'
import { connect } from 'react-redux'
import {mudarTexto} from './actions/appActions'

import Component1 from './components/component_1';
import Component2 from './components/component_2';

class App extends Component {
  mudarTexto() {
    this.props.dispatch(mudarTexto('Novo texto!!!'))
  }
  render() {
    return (
      <div className="row">

        <div className="square">
        <p>App</p>
        <h1>{this.props.texto}</h1>
        </div>
        
        <div className="square">
        <Component1/>
        </div>
        <div className="square">
        <Component2/>
        </div>
        
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

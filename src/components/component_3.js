import React, { Component } from 'react';
import { connect } from 'react-redux'
import { mudarTexto } from '../actions/appActions'

class Component3 extends Component {
    mudarTexto(text) {
        this.props.dispatch(mudarTexto(text))
      }
    render() {
        return (
            <div>
                <p>Componente 3</p>
                <h1>{this.props.texto}</h1>
                <button onClick={() => this.mudarTexto('Componente 3')}>Componente 3</button>
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

export default connect(mapStateToProps)(Component3);
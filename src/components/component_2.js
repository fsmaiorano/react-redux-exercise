import React, { Component } from 'react';
import { connect } from 'react-redux'

class Component2 extends Component {
    render() {
        return (
            <div>
                <p>Componente 2</p>
                <h1>{this.props.texto}</h1>
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

export default connect(mapStateToProps)(Component2);
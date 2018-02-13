const initialState = {
    texto: 'Texto inicial!'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'MUDAR_TEXTO':
            console.log("reducer", { texto: action.payload })
            return { texto: action.payload }
        default:
            return state
    }
}
// export default {
//     mudarTexto(texto) {
//          return {
//               type: 'MUDAR_TEXTO',
//               payload: texto
//          }
//     }
// }

export const mudarTexto = (texto) => {
    return {
        type: 'MUDAR_TEXTO',
        payload: texto
    }
}
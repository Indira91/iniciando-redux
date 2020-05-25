const estadoInicial = {
    on: false
}

const ligarDesligar = (state = estadoInicial, action) => {
    switch (action.type) {
        case 'TURN_ON_OR_OFF':
            return {...state, on: action.on};
        default: 
            return state;
    }
}
    
export default ligarDesligar;
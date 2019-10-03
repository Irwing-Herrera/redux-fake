"use strict";
exports.__esModule = true;
function contadorReducer(state, action) {
    if (state === void 0) { state = 10; }
    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
}
exports.contadorReducer = contadorReducer;

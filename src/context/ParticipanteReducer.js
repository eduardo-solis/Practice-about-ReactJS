import { GET_PARTICIPANTES, GET_PARTICIPANTE, CLEAN_PARTICIPANTE, ADD_PARTICIPANTE, MODIFY_PARTICIPANTE, DELETE_PARTICIPANTE } from "./types";

export const ParticipanteReducer = ( state, action ) => {

    const { type, payload } = action;

    switch (type) {
        case GET_PARTICIPANTES:
            return {
                ...state,
                participantes: payload,
                cargando: false
            }
        
        case GET_PARTICIPANTE:
            return {
                ...state,
                participanteObtenido: payload,
                cargando: false
            }

        case ADD_PARTICIPANTE:
            return {
                ...state,
                participanteAgregado: payload
            }

        case MODIFY_PARTICIPANTE:
            return {
                ...state,
                participanteModificado: payload
            }
        
        case DELETE_PARTICIPANTE:
            return {
                ...state,
                participanteEliminado: payload
            }
        
        case CLEAN_PARTICIPANTE:
            return {
                ...state,
                participanteObtenido: payload
            }
    
        default:
            break;
    }

}
const initialState = {
    metas: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AGREGAR_META':
            return {
                ...state,
                metas: [...state.metas, action.payload]
            };
        case 'EDITAR_META':
            return {
                ...state,
                metas: state.metas.map(meta =>
                    meta.id === action.payload.id ? action.payload : meta
                )
            };
        case 'BORRAR_META':
            return {
                ...state,
                metas: state.metas.filter(meta => meta.id !== action.payload)
            };
        default:
            return state;
    }
};

export default rootReducer;

export const initialState = {
    order: [],
    objects: {}
}

function reducer(state, action) {
    switch (action.type) {
        case 'create': {
            const id = action.goal.id;
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.goal
                }
            };
            return newState
        };
        case 'read': {
            const goals = action.goals;
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce((object, goal) => ({ ...object, [goal.id]: goal }), {})
            };
            return newState
        };
        case 'update': {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal
            };
            const newState = { ...state };
            return newState;
        };
        case 'delete': {
            const id = action.id;
            const newState = { 
                ...state,
                order: state.order.filter(item => item !== id),
                objects: { ...state.objects }
            };
            delete newState.objects[id];
            return newState;
        }
    }
}

export default reducer;
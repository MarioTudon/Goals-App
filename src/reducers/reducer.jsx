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
            const newState = { ...state,
                objects: {
                    ...state.objects,
                    [id]: {
                        ...state.objects[id],
                        ...action.goal
                    }
                }
             };
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
        case 'increaseCount': {
            const id = action.id;
            const newState = {
                ...state,
                objects: {
                    ...state.objects,
                    [id]: {
                        ...state.objects[id],
                        count: state.objects[id].count + 1
                    }
                }
            };
            return newState;
        }
        case 'resetCount': {
            const id = action.id;
            const newState = {
                ...state,
                objects: {
                    ...state.objects,
                    [id]: {
                        ...state.objects[id],
                        count: 0
                    }
                }
            };
            return newState;
        }
    }
}

export default reducer;
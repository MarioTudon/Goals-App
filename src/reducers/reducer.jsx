const memory = localStorage.getItem('goals');

export const initialState = memory ? JSON.parse(memory) : {
    order: [],
    objects: {}
}

function reducer(state, action) {
    switch (action.type) {
        case 'create': {
            const id = Math.random() * 1000 + Date.now();
            const newState = {
                order: Array.isArray(state.order) ? [...state.order, id] : [id],
                objects: {
                    ...state.objects,
                    [id]: { ...action.goal, count: 0, id: id }
                }
            };
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState
        };
        case 'read': {
            const goals = action.goals;
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce((object, goal) => ({ ...object, [goal.id]: goal }), {})
            };
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState
        };
        case 'update': {
            const id = action.goal.id;
            const newState = {
                ...state,
                objects: {
                    ...state.objects,
                    [id]: {
                        ...state.objects[id],
                        ...action.goal
                    }
                }
            };
            localStorage.setItem('goals', JSON.stringify(newState));
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
            localStorage.setItem('goals', JSON.stringify(newState));
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
            localStorage.setItem('goals', JSON.stringify(newState));
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
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        }
        default: {
            throw new Error('The action doesn\'t exist');
        }
    }
}

export default reducer;
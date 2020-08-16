export default (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_SESSION':
            return {
                ...state,
                activeSession: action.activeSession
            }
        case 'INCREASE_COUNTER':
            const incStateValue = state.activeSession.toLowerCase();
            return {
                ...state,
                [incStateValue]: state[incStateValue] + 1,
            }
        case 'DECREASE_COUNTER':
            const decStateValue = state.activeSession.toLowerCase();
            return {
                ...state,
                [decStateValue]: state[decStateValue] - 1,
            }
        default:
            return state;
    }
}
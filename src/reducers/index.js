export default (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_SESSION':
            return {
                ...state,
                activeSession: action.activeSession
            }
        default:
            return state;
    }
}
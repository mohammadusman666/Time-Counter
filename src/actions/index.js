export const setActiveSession = (activeSession) => {
    return {
        type: 'SET_ACTIVE_SESSION',
        activeSession
    }
}

export const setCounter = (countType) => {
    return {
        type: countType
    }
}
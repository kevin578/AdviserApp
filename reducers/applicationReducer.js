const defaultState = {
    menuIsOpen: false
}

export default function applicationReducer(state = defaultState, action) {
    switch(action.type) {
        case "TOGGLE_MENU":
            return {...state, menuIsOpen: action.payload}
        default:
            return state;
    }
}
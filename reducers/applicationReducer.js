const defaultState = {
    menuIsOpen: false,
    content: []
}

export default function applicationReducer(state = defaultState, action) {
    switch(action.type) {
        case "TOGGLE_MENU":
            return {...state, menuIsOpen: action.payload}
        case "LOAD_CONTENT":
            return {...state, content: action.payload}
        default:
            return state;
    }
}
const defaultState = {
    menuIsOpen: false,
    content: [],
    itemHtml: {}
}

export default function applicationReducer(state = defaultState, action) {
    switch(action.type) {
        case "TOGGLE_MENU":
            return {...state, menuIsOpen: action.payload}
        case "LOAD_CONTENT":
            return {...state, content: action.payload}
        case "SET_ITEM_HTML":
            return {...state, itemHtml: action.payload}
        default:
            return state;
    }
}
export function toggleMenu(bool) {
    return {
        type: "TOGGLE_MENU",
        payload: bool
    }
}

export function loadContent(content) {
    return {
        type: "LOAD_CONTENT",
        payload: content
    }
}

export function setItemHtml(html) {
    return {
        type: "SET_ITEM_HTML",
        payload: html
    }
}
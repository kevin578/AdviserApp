export const defaultState = {
  year: ''
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_USER_YEAR":
      return {...state, year: action.payload}
    case "CLEAR_USER_YEAR":
      return {...state, year: ''}
    default:
      return state;
  }
}

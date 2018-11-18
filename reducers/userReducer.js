export const defaultState = {
  formYear: '',
  year: '',
  graduationYear: ''
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_GRADUATION_YEAR":
      return {...state , graduationYear: action.payload}
    case "SET_USER_YEAR":
      return {...state, year: action.payload}
    case "SET_USER_FORM_YEAR":
      return {...state, formYear: action.payload}
    case "CLEAR_USER_FORM_YEAR":
      return {...state, formYear: ''}
    default:
      return state;
  }
}

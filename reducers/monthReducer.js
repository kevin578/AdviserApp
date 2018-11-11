const defaultState = {
  currentMonth: 3
};

export default function monthReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_CURRENT_MONTH":
      return { ...state, currentMonth: action.payload };
    default:
      return state;
  }
}

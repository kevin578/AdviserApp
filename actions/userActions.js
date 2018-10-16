export const clearUserYear = ()=> ({
    type: "CLEAR_USER_YEAR",
})

export const setUserYear = year => ({
  type: "SET_USER_YEAR",
  payload: year
});

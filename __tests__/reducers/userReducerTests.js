import userReducer, {defaultState} from "../../reducers/userReducer";

it('should setup default values', ()=>{
    const state = userReducer(defaultState, {type: '@@INIT'});
    expect(state).toEqual(defaultState);
})

it('should set user to the correct year', ()=> {
    const action = {
        type: "SET_USER_YEAR",
        payload: "Freshman" 
    }
    const state = userReducer(defaultState, action);
    expect(state.year).toEqual("Freshman")
})

it('should reset the year', ()=> {
    const action = {type: "CLEAR_USER_YEAR"}
    const state = userReducer(defaultState, action);
    expect(state.year).toEqual("");
})


import {clearUserYear, setUserYear} from '../../actions';

it('should return CLEAR_USER_YEAR action object', ()=> {
  const action = clearUserYear();
  expect(action).toEqual({
    type: 'CLEAR_USER_YEAR'
  })
})

it('should return SET_USER_YEAR action object', ()=> {
  const action = setUserYear("Freshman");
  expect(action).toEqual({
    type: 'SET_USER_YEAR',
    payload: "Freshman"
  })
})
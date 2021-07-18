import { numberReducer, initialState} from './reducer'

test("should return the initial state", () => {
  expect(numberReducer(undefined, {})).toEqual(initialState)
})

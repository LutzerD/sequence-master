import {
  RECITE_MODE,
  RECITE_NEXT_NUMBER,
  RECITE_START,
  INTRO_END,
} from "../constants/actions";

const newNumber = () => {
  const r = Math.floor(Math.random() * 10);
  console.log(r);
  return r;
};

let initialValue = newNumber();
export const initialState = {
  number: {
    current: initialValue,
    history: [initialValue],
  },
  targetScore: 5,
  settings: {
    tts: false,
  },
  currentScore: 5,
  mode: RECITE_MODE,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECITE_NEXT_NUMBER: {
      const newState = {...state}
      const nextNumber = newNumber();
      newState.number.current = newNumber();
      newState.number.history.push(nextNumber);
      newState.currentScore+=1;
      newState.targetScore+=1;
      return newState;
    }
    default: {
      return state;
    }
  }
};

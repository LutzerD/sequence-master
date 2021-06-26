import {
  RECITE_MODE,
  RECITE_NEXT_NUMBER,
  RECITE_START,
  INTRO_END,
  INTRO_START,
  HOME_MODE,
} from "../constants/actions";

const newNumber = () => {
  const r = Math.floor(Math.random() * 10);
  console.log(r);
  return r;
};

let initialValue = newNumber();
export const initialState = {
  number: initialValue,
  history: [initialValue],
  targetScore: 5,
  settings: {
    tts: false,
  },
  currentScore: 5,
  mode: HOME_MODE,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECITE_NEXT_NUMBER: {
      const newState = { ...state }; //For whatever reason, this is required.
      const nextNumber = newNumber();
      newState.number = newNumber();
      newState.history.push(nextNumber);
      newState.currentScore += 1;
      newState.targetScore = 5;
      return newState;
    }
    case HOME_MODE:{
      return {
        ...state,
        mode: HOME_MODE
      };  
    }
    case INTRO_START:{
      console.log("starto?")
      return { 
        ...state,
        currentScore: 1,
        history: [],
        mode: RECITE_MODE,
      }; 
    }
    case INTRO_END: {
      const newState = { ...state }; //For whatever reason, this is required.
      newState.currentScore = 1;
      newState.history = [];
      return newState;
    }
    default: {
      return state;
    }
  }
};

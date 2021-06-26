import {
  RECITE_MODE,
  RECITE_NEXT_NUMBER,
  RECITE_START,
  INTRO_END,
  INTRO_START,
  HOME_MODE,
  INTRO_NEXT_NUMBER,
  RECITE_END,
  INTRO_MODE,
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
    targetScore: 5,
    currentScore: 5,
    historyIndex: 0,
  },
  settings: {
    tts: false,
  },
  mode: HOME_MODE,
};

export const numberReducer = (state = initialState, action) => {
  const newState = { ...state }; 
  switch (action.type) {
    case INTRO_START: {
      newState.currentScore = 0;
      newState.history = [];
    }
    case INTRO_NEXT_NUMBER: {
      const nextNumber = newNumber();
      newState.current = newNumber();
      newState.history.push(nextNumber);
      newState.currentScore += 1;
      return newState;
    }
    case RECITE_START: {
      newState.historyIndex = -1; 
    } 
    case RECITE_NEXT_NUMBER: {
      newState.historyIndex+=1;
      newState.current = newState.history[newState.historyIndex];
      return newState;
    }
    case RECITE_END: {
      newState.targetScore = newState.historyIndex + 1 >= newState.currentScore  ?  newState.targetScore + 1 : newState.currentScore - 1;
      return newState;
    }
    default: {
      return state;
    }
  }
};


export const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECITE_END:
    case HOME_MODE: {
      return HOME_MODE;
    }
    case INTRO_START: {
      console.log("swit")
      return INTRO_MODE;
    }
    case RECITE_START:
    case INTRO_END: {
      return RECITE_MODE;
    }
    default: {
      return state;
    }
  }
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
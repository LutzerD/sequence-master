import {
  RECITE_NEXT_NUMBER,
  RECITE_START,
  INTRO_END,
  INTRO_START,
  INTRO_NEXT_NUMBER,
  RECITE_COMPLETE_SUCCESS,
  RECITE_COMPLETE_FAIL,
  GOTO_HOME_SCREEN,
  GOTO_INTRO_SCREEN,
  GOTO_RECITE_SCREEN,
} from "../constants/actions";
import {
  FAIL_SCREEN,
  HOME_SCREEN,
  INTRO_SCREEN,
  RECITE_SCREEN,
  SUCCESS_SCREEN,
} from "../constants/screens";

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
  screen: HOME_SCREEN,
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
      // newState.targetScore = 5; //TODO: Remove this for prod
    }
    case RECITE_NEXT_NUMBER: {
      newState.historyIndex += 1;
      newState.current = newState.history[newState.historyIndex];
      return newState;
    }
    case RECITE_COMPLETE_FAIL: {
      newState.targetScore =
        newState.targetScore > 5 ? newState.targetScore - 1 : 5;
      return newState;
    }
    case RECITE_COMPLETE_SUCCESS: {
      newState.targetScore += 1;
      if (newState.targetScore > 7) {
        newState.targetScore = 7;
      }
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECITE_COMPLETE_SUCCESS: {
      return SUCCESS_SCREEN;
    }
    case RECITE_COMPLETE_FAIL: {
      return FAIL_SCREEN;
    }
    case GOTO_HOME_SCREEN: {
      return HOME_SCREEN;
    }
    case INTRO_START:
    case GOTO_INTRO_SCREEN: {
      return INTRO_SCREEN;
    }
    case RECITE_START:
    case GOTO_RECITE_SCREEN: {
      return RECITE_SCREEN;
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

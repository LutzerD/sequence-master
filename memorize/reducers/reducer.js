import Environment from "../../environment";
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
  GOTO_SETTINGS,
  GOTO_PREVIOUS,
  RESET_HIGHSCORES,
  REVIEW_TTS_TOGGLE,
  INTRO_TTS_TOGGLE,
  RESET_ALL,
} from "../constants/actions";
import { MAX_HIGHSCORES, MIN_TARGET_SCORE, TTS_DEFAULT } from "../constants/config";
import {
  DEFAULT_SCREEN,
  FAIL_SCREEN,
  HOME_SCREEN,
  INTRO_SCREEN,
  RECITE_SCREEN,
  SETTINGS_SCREEN,
  SUCCESS_SCREEN,
} from "../constants/screens";

const newNumber = () => {
  const r = Math.floor(Math.random() * 10);
  return r;
};

let initialValue = newNumber();
export const initialState = {
  number: {
    current: initialValue,
    history: [initialValue],
    highScores: [],
    targetScore: MIN_TARGET_SCORE,
    currentScore: MIN_TARGET_SCORE,
    historyIndex: 0,
    attempts: 0,
    completions: 0,
  },
  settings: {
    tts: {
      intro: TTS_DEFAULT,
      review: TTS_DEFAULT,
    },
  },
  screen: {
    current: HOME_SCREEN,
    previous: DEFAULT_SCREEN,
  },
};

export const numberReducer = (state = initialState.number, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RESET_ALL: {
      return initialState.number;
    }
    case RESET_HIGHSCORES: {
      Object.assign(newState, {
        ...initialState.number,
        attempts: newState.attempts,
        completions: newState.completions,
      });
      console.log(newState);
      return newState;
    }
    case INTRO_START: {
      newState.currentScore = 0;
      newState.history = [];
    }
    case INTRO_NEXT_NUMBER: {
      const nextNumber = newNumber();
      newState.current = nextNumber;
      newState.history = [...newState.history, nextNumber];
      newState.currentScore += 1;
      return newState;
    }
    case RECITE_START: {
      newState.attempts = newState.attempts ? newState.attempts + 1 : 1;
      newState.historyIndex = -1;
      if (!Environment.prod) {
        newState.targetScore = 5;
      }
    }
    case RECITE_NEXT_NUMBER: {
      newState.historyIndex += 1;
      newState.current = newState.history[newState.historyIndex];
      return newState;
    }
    case RECITE_COMPLETE_FAIL: {
      newState.completions = newState.completions
        ? newState.completions + 1
        : 1;
      newState.targetScore =
        newState.targetScore > 5 ? newState.targetScore - 1 : 5;
      return newState;
    }
    case RECITE_COMPLETE_SUCCESS: {
      newState.historyIndex += 1;
      newState.completions = newState.completions
        ? newState.completions + 1
        : 1;
      newState.targetScore += 1;
      if (!Environment.prod) {
        if (newState.targetScore > 7) {
          newState.targetScore = 7;
        }
      }

      const highScore = {
        score: newState.history.length,
        date: new Date().toLocaleDateString({
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        }),
      };
      if (!newState.highScores || !newState.highScores.length) {
        newState.highScores = [highScore];
      } else {
        let index = newState.highScores.length - 1;
        for (index = newState.highScores.length - 1; index >= 0; index--) {
          const highScores = newState.highScores[index].score;
          if (highScore.score < highScores) {
            newState.highScores.splice(index + 1, 0, highScore);
            newState.highScores = newState.highScores.splice(0, MAX_HIGHSCORES);
            return newState;
          }
        }

        newState.highScores.splice(0, 0, highScore);
        newState.highScores = newState.highScores.splice(0, MAX_HIGHSCORES);
      }
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const screenReducer = (state = initialState.screen, action) => {
  const newState = {
    ...state,
  };

  switch (action.type) {
    case RESET_ALL: {
      break;//so e.g. if in settings, doesn't leave settings
    }
    case RECITE_COMPLETE_SUCCESS: {
      newState.current = SUCCESS_SCREEN;
      break;
    }
    case RECITE_COMPLETE_FAIL: {
      newState.current = FAIL_SCREEN;
      break;
    }
    case GOTO_HOME_SCREEN: {
      newState.current = HOME_SCREEN;
      break;
    }
    case INTRO_START:
    case GOTO_INTRO_SCREEN: {
      newState.current = INTRO_SCREEN;
      break;
    }
    case GOTO_SETTINGS: {
      newState.current = SETTINGS_SCREEN;
      break;
    }
    case GOTO_PREVIOUS: {
      newState.current = newState.previous;
      break;
    }
    case RECITE_START:
    case GOTO_RECITE_SCREEN: {
      newState.current = RECITE_SCREEN;
      break;
    }
    default:
      break;
  }
  if (newState.current !== state.current) {
    newState.previous = state.current;
  }
  return newState;
};

export const settingsReducer = (state = initialState.settings, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RESET_ALL: {
      return initialState.settings;
    }
    case INTRO_TTS_TOGGLE: {
      newState.tts.intro = !newState.tts.intro;
      break;
    }
    case REVIEW_TTS_TOGGLE: {
      newState.tts.review = !newState.tts.review;
      break;
    }
    default:
      break;
  }
  return newState;
};

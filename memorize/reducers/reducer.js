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

export const memorizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECITE_NEXT_NUMBER: {
      if (typeof(state) == "number"){
        state = {
          history: []
        }
      }
      const nextNumber = newNumber();
      state.current = newNumber();
      state.history.push(nextNumber);
      return state;
    }
    default: {
      return state;
    }
  }
};
export const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECITE_START: {
    }
    default: {
    }
  }
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECITE_NEXT_NUMBER: {
      return newNumber();
    }
    default: {
      return state;
    }
  }
};

export const targetScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECITE_NEXT_NUMBER: {
      return newNumber();
    }
    case INTRO_END: {
    }
    default: {
      return state;
    }
  }
};
export const currentScoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECITE_NEXT_NUMBER: {
      return state > 0 ? state + 1 : 1;
    }
    default: {
      return state;
    }
  }
};

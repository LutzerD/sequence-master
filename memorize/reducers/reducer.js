import { NEXT_MEMORIZE_NUMBER } from "../constants/actions";

const newNumber = () => Math.floor(Math.random() * 10);

export const initialState = {
  number: newNumber(),
};

export const memorizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MEMORIZE_NUMBER: {
      return {
        ...state,
        number: newNumber(),
      };
    }
    default: {
      return state;
    }
  }
};


import { NEXT_MEMORIZE_NUMBER } from "../constants/actions";

const newNumber = () =>{
    const r = Math.floor(Math.random() * 10)
    console.log(r)
    return r
};

export const initialState = {
  number: newNumber(),
};

export const memorizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MEMORIZE_NUMBER: {
      return newNumber();
    }
    default: {
      return state;
    }
  }
};


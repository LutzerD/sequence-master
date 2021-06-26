export const RECITE_NEXT_NUMBER = "[MEMORIZE] RECITE_NEXT_NUMBER";
export const RECITE_START = "[MEMORIZE] RECITE_START";
export const RECITE_END = "[MEMORIZE] RECITE_END";
export const INTRO_START = "[MEMORIZE] INTRO_START";
export const INTRO_NEXT_NUMBER = "[MEMORIZE] INTRO_NEXT_NUMBER";
export const INTRO_END = "[MEMORIZE] INTRO_END";

export const INTRO_MODE = "[MEMORIZE] INTRO_MODE"
export const RECITE_MODE = "[MEMORIZE] RECITE_MODE"

export const introNextNumber = () => ({
  type: INTRO_NEXT_NUMBER,
});

export const reciteNextNumber = () => ({
  type: RECITE_NEXT_NUMBER,
});

export const reciteStart = () => ({
  type: RECITE_START,
});

export const reciteEnd = () => ({
  type: RECITE_END,
});

export const introStart = () => ({
  type: INTRO_START,
});

export const introEnd = () => ({
  type: INTRO_END,
});

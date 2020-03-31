import { EXAMPLE } from "settings/constants";

const initialState = {
  example: null
};

const reducer = {
  [EXAMPLE.EXAMPLE_SET]: (stt, payload) => ({
    ...stt,
    example: payload
  }),
  [EXAMPLE.EXAMPLE_RESET]: () => initialState
};

export default function exampleReducer(
  state = initialState,
  { type, payload }
) {
  if (typeof reducer[type] === "function") {
    return reducer[type](state, payload);
  }

  return state;
}

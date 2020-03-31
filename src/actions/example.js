import { EXAMPLE } from "settings/constants";

export const fetchExample = () => {
  return dispatch => {
    dispatch(setExample("example"));
  };
};

export const setExample = data => ({
  type: EXAMPLE.EXAMPLE_SET,
  payload: data
});

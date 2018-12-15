// @flow

type State = {};

type Action = { type: string };

const initialState = {};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};

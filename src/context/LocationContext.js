import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const actions = {
  startRecording: dispatch => () => {},
  stopRecording: dispatch => () => {},
  addLocation: dispatch => () => {},
};

export const { Context, Provider } = createDataContext(locationReducer, actions, {
  recording: false,
  currentLocation: null,
  locations: [],
});

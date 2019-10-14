import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const actions = {
  fetchTracks: dispatch => () => {},
  createTrack: dispatch => (name, locations) => {
    
  },
};

export const { Provider, Context } = createDataContext(trackReducer, actions, []);

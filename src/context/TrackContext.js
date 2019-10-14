import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};

const actions = {
  fetchTracks: dispatch => async () => {
    const response = await trackerAPI.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data });
  },
  createTrack: dispatch => async (name, locations) => {
    await trackerAPI.post('/tracks', { name, locations });
  },
};

export const { Provider, Context } = createDataContext(trackReducer, actions, []);

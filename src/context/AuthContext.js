import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { ...state, token: action.payload, errorMessage: '' };
    default:
      return state;
  }
};

const actions = {
  signup: dispatch => async ({ email, password }) => {
    try {
      const response = await trackerAPI.post('/signup', { email, password });
      const token = response.data.token;

      await AsyncStorage.setItem('token', token);
      dispatch({ type: 'signup', payload: token });

      navigate('TrackList');
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with signup!' });
    }
  },
  signin: dispatch => ({ email, password }) => {},
  signout: dispatch => () => {},
};

const initialState = { token: null, errorMessage: '' };

export const { Provider, Context } = createDataContext(authReducer, actions, initialState);
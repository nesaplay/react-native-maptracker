import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const actions = {
  signup: dispatch => async ({ email, password }) => {
    try {
      const response = await trackerAPI.post("/signup", { email, password })
      console.log(response.data)
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with signup!' })
    }
  },
  signin: dispatch => ({ email, password }) => {

  },
  signout: dispatch => () => {

  },
};

const initialState = { isSignedIn: false, errorMessage: '' };

export const { Provider, Context } = createDataContext(authReducer, actions, initialState);

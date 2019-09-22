import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const actions = {
  signup: dispatch => ({ email, password }) => {
    
  },
  signin: dispatch => ({ email, password }) => {

  },
  signout: dispatch => () => {

  },
};

const initialState = { isSignedIn: false };

export const { Provider, Context } = createDataContext(authReducer, actions, initialState);

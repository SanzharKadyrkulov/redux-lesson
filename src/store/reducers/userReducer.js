import { USERACTIONS } from "../../helpers/consts";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERACTIONS.FETCH_USERS:
      return { ...state, loading: true };
    case USERACTIONS.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: null, users: action.payload };
    case USERACTIONS.FETCH_USERS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

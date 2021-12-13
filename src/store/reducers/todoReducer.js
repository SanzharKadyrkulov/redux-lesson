import { TODOACTIONS } from "../../helpers/consts";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOACTIONS.FETCH_TODOS:
      return { ...state, loading: true };
    case TODOACTIONS.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, error: null, todos: action.payload };
    case TODOACTIONS.FETCH_TODOS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

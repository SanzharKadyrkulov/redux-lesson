import axios from "axios";
import { TODOACTIONS, TODOAPI } from "../../helpers/consts";

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: TODOACTIONS.FETCH_TODOS });
      const { data } = await axios.get(TODOAPI);
      dispatch({
        type: TODOACTIONS.FETCH_TODOS_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: TODOACTIONS.FETCH_TODOS_ERROR,
        payload: e,
      });
    }
  };
};

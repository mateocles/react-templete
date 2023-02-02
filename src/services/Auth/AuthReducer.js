import { handleActions } from "redux-actions";
import { Token } from "../../common/Storage/Token";

export const INITIAL_STATE = {
  authentication: Token.isTokenValid(),
  loading: false,
  success: [],
  message: undefined,
  error: {
    setSignup: undefined,
    setLogin: undefined,
  },
  successes: {
    setSignup: undefined,
    setLogin: undefined,
  },
};
// eslint-disable-next-line
const reducer = handleActions(
  {
    AUTH: {
       // eslint-disable-next-line
      LOGIN:(state,{ payload: {} })=>({
        ...state,
        loading: true,
        error: {
          ...state.error,
          setLogin: false,
        },
        successes: {
          ...state.successes,
          setLogin: false,
        },
      }),
      LOGIN_RESPONSE: {
        next(state, { payload: { token } }) {
          return {
            ...state,
            token,
            authentication: true,
            loading: false,
            error: {
              ...state.error,
              setLogin: false,
            },
            successes: {
              ...state.successes,
              setLogin: true,
            },
          };
        },
        throw(state, { error, payload: { message } }) {
          return {
            ...state,
            loading: false,
            message,
            error: {
              ...state.error,
              setLogin: true,
            },
            successes: {
              ...state.successes,
              setLogin: false,
            },
          };
        },
      },
    },
  },
  INITIAL_STATE
);

export default reducer;

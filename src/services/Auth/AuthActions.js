import { createActions } from "redux-actions";

export const { auth } = createActions({
  AUTH: {
    LOGIN: (document, password) => ({ document, password }),
    LOGIN_RESPONSE: (token) => ({ token }),

    SIGNUP: (name,lastname,dataBirth,gender,typeDocument,document,direction,town,phone,occupation,photo,tabletNumber,department,municipality,email,password) => ({name,lastname,dataBirth,gender,typeDocument,document,direction,town,phone,occupation,photo,tabletNumber,department,municipality,email,password,}),
    SIGNUP_RESPONSE: (success) => ({ success }),

    LOGOUT: () => ({}),
  },
});

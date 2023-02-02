import { put, takeLatest, all } from "redux-saga/effects";
import { message } from "antd";
import { auth } from "./AuthActions";
import Api from "../../common/Api/Api";
import { Token } from "../../common/Storage/Token";
import { push } from "react-router-redux";
import { setMessage } from "../../common/Utils/Message";

function* login({ payload }) {
  try {
    const response = yield Api.post("auth/login", payload);
    if (response.payload.success) {
      yield put(push("/"));
      Token.setToken("session", response.payload.payload);
      yield put(auth.loginResponse(response.payload));

      yield put(push("/home"));
    } else {
      const err = new TypeError("ERROR_LOGIN");
      message.error("Ha sucedido un error en el login");
      yield put(auth.loginResponse(err));
    }
  } catch (error) {
    const err = new TypeError("ERROR_LOGIN");
    message.error("Ha sucedido un error en el login");
    yield put(auth.loginResponse(err));
  }
}

function* signup({ payload }) {
  try {
    const response = yield Api.post("auth/signup", payload);
    if (response.payload.success) {
      yield put(auth.signupResponse(response.payload));
      setMessage("Correcto", "Registro completo", "success");
    } else {
      const err = new TypeError("ERROR_SIGNUP");
      setMessage("Error", response.payload.response.detail, "error");
      yield put(auth.signupResponse(err));
    }
  } catch (error) {
    const err = new TypeError("ERROR_SIGNUP");
    setMessage("Error", "Ha sucedido un error en el registro", "error");
    yield put(auth.signupResponse(err));
  }
}

function* logout() {
  Token.removeToken();
  yield put(push("/"));
}

function* ActionWatcher() {
  yield takeLatest(auth.login, login);
  yield takeLatest(auth.signup, signup);
  yield takeLatest(auth.logout, logout);
}

export default function* rootSaga() {
  yield all([ActionWatcher()]);
}

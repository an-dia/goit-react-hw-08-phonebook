import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

//POST '/users/signup'
//credentials - body {name,email.password}
//После успешной регистрации добавляем токен в HTTP-заголовок

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);
    console.log('response.data', response.data);

    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

// POST @ /users/login
// body:
//   { email, password }

//  После успешного логина добавляем токен в HTTP-заголовок

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

// POST @ /users/logout - отправляем заголовок авторизации
// (явно не передаём, потомучто при логине или регистрации мы его засетили)
// headers:
//   Authorization: Bearer token

// 1. После успешного логаута, удаляем токен из HTTP-заголовка

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    //данные никакие не передаём, это чтобы очистить state
    // (сбросить в начальное состояние)
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = credentials => dispatch => {};

export default { register, logIn, logOut, getCurrentUser };

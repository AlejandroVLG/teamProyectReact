
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: "",
    isRegister: false,
    successMessage: ""

  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        ...action.payload,
        successMessage: "You've logged successfully"
      }
    },
    logout: (state, action) => {
      return {
        ...state.initialState
      }

    },
    register: (state, action) => {
      return {
        ...state,
        isRegister: true,
        successMessage: "You've registered successfully"
      }
    }
  },
});

export const loginUser = (body) => async (dispatch) => {
  try {

    const user = await axios.post("https://heroku-sqlurl.herokuapp.com/users/login", body);

    let decodeToken = jwt(user.data.token);

    if (user.status === 200) {

      dispatch(login({ ...decodeToken, token: user.data.token }))
    }

  } catch (error) {
    dispatch(logError(error))
  }
};


export const logOut = () => (dispatch) => {
  dispatch(logout());
};

export const registerUser = (name, client_number, age, gender, password, role) => async (dispatch) => {
  try {
    const user = await axios.post('https://heroku-sqlurl.herokuapp.com/users/adduser',
      {
        name: name,
        client_number: client_number,
        age: age,
        gender: gender,
        password: password,
        role: role
      })

    let response = user
    if (response.status === 200) {
      dispatch(register(response.data))
    }
  } catch (error) {
    dispatch(logError(error))
  }
}

export const { login, logout, register } = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;

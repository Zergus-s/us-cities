import { createSlice } from '@reduxjs/toolkit';

const getTokenFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('tokenData'));
  if (data && Date.now() - +data.time > 3600000) localStorage.clear();
  if (!data)
    return {
      token: '',
      userId: '',
    };
  else return data;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
    authData: getTokenFromLocalStorage(),
  },
  reducers: {
    fetchUsers: (state) => {
      state.loading = true;
      state.error = null;
    },

    logOut: (state) => {
      state.authData = {};
      localStorage.clear();
    },

    logIn: (state) => {
      state.loading = true;
      state.error = null;
    },

    signUp: (state) => {
      state.loading = true;
      state.error = null;
    },

    setUsers: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },

    setToken: (state, action) => {
      state.authData = action.payload;
      localStorage.setItem(
        'tokenData',
        JSON.stringify({
          token: action.payload.token,
          userId: action.payload.userId,
          time: Date.now(),
        })
      );
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice;

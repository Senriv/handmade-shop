import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { userResponse, token, refreshToken } = action.payload;
      state.user = userResponse;
      state.token = token;
      state.refreshToken = refreshToken;
    },

    logOut: () => {
      return initialState;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

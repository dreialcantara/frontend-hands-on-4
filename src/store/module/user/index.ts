import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  idUser?: string;
  token?: string;
  name?: string;
  email?: string;
  isLogged?: boolean;
}

const userReduce = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
  } as UserState,
  reducers: {
    setUser(state, action) {
      Object.assign(state, {
        idUser: action.payload.token.user.idUser,
        name: action.payload.token.user.name,
        token: action.payload.token,
        email: action.payload.email,
        isLogged: true,
      });
    },

    removeUser(state, action) {
      Object.assign(state, {
        token: undefined,
        email: undefined,
        name: undefined,
      });
    },
  },
});
export const { setUser, removeUser } = userReduce.actions;

export default userReduce.reducer;

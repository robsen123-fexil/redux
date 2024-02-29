import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "users",
  initialState: [
    {
      id: 0,
      name: "",
      email: "",
      password: "",
    },
  ],
  reducers: {
    getUsersSlice: (state, action) => {
      state = action.payload;
      return state;
    },
    addUserSlice: (state, action) => {
      state.push(action.payload);
      return state;
    },
    editUserSlice: (state, action) => {
      const updatedUser = action.payload;
      return state.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
    },

    deleteUserSlice: (state, action) => {
      const userIdToDelete = action.payload;
      return state.filter((user) => user.id !== userIdToDelete);
    },
  },
});
export const { getUsersSlice, addUserSlice, editUserSlice, deleteUserSlice } = users.actions
export default users.reducer
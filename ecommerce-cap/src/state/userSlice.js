import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const userSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    // 👉 STEP 8: Update addTodo so that it adds the todo passed in action.payload to the state
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
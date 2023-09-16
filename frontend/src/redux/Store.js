import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice.js";
import loginSlice from "./reducers/loginSlice.js";
import updateSlice from "./reducers/updateSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    login: loginSlice,
    update: updateSlice,
  },
});

export default store;

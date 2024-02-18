import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import blogSlice from "./slice/blogSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    blog: blogSlice,
  },
});
export default store;

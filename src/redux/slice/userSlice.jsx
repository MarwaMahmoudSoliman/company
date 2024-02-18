import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import Api from "../../Api";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await Api.post("/auth/register", userData);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await Api.post("/auth/login", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const currentUser = createAsyncThunk(
  "auth/current-user",
  async (userData, { rejectWithValue }) => {
    try {
      const [cookies] = useCookies([]);
      const navigate = useNavigate();
      const location = useLocation();
      const currentRoute = location.pathname;
      if (currentRoute !== "/Login" || currentRoute !== "/Signup") {
        if (!cookies.jwt) {
          return navigate("/Login");
        }
        const response = await Api.post("/auth/current-user");
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    users: [],
    getUser: null,
    loading: false,
    error: null,
    success: true,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //  ------------------- Current User ----------------
      .addCase(currentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        // console.log("currentUser",payload);
        state.loading = false;
        state.success = true;
        state.isAuthenticated = true;
        state.user = payload.data;
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        console.log("currentUser error", payload);
        state.error = payload.error;
        state.success = payload.success;
      })

      //  ------------------- Login User ----------------
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.isAuthenticated = true;
        state.user = payload.data;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload) {
          if (Array.isArray(payload.error)) {
            console.log(payload.error);
            payload.error.map((err) => toast.error(err.message));
          } else if (payload.success === false && payload.error) {
            state.error = payload.error;
            state.success = payload.success;
          } else {
            state.error = "An unknown error occurred";
          }
        } else {
          state.error = "Network error occurred";
        }
      })

      //  ------------------- Register User ----------------
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload) {
          if (Array.isArray(payload.error)) {
            console.log(payload.error);
            payload.error.map((err) => toast.error(err.message));
          } else if (payload.success === false && payload.error) {
            state.error = payload.error;
            state.success = payload.success;
          } else {
            state.error = "An unknown error occurred";
          }
        } else {
          state.error = "Network error occurred";
        }
      });
  },
});
export default userSlice.reducer;

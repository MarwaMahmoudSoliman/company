import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Api from "../../Api";

// <--------- Fetch All Blogs --------->
export const fetchBlogs = createAsyncThunk(
  "/blog",
  async (_, { rejectWithValue }) => {
    try {
      const res = await Api.get("/blog");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// <--------- Fetch One Blog --------->
export const fetchBlogById = createAsyncThunk(
  "blog/get",
  async (BlogId, { rejectWithValue }) => {
    try {
      const res = await Api.get(`/blog/${BlogId}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// <--------- Create New Blog --------->
export const createBlog = createAsyncThunk(
  "blog/create",
  async (blogData, { rejectWithValue }) => {
    try {
      const res = await Api.post("/blog/create", blogData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// <--------- Update Blog --------->
export const updateBlog = createAsyncThunk(
  "blog/update",
  async (BlogId, updatedBlogData, { rejectWithValue }) => {
    try {
      const res = await Api.put(`/blog/${BlogId}`, updatedBlogData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// <--------- Delete Blog --------->
export const deleteBlog = createAsyncThunk(
  "blog/delete",
  async (BlogId, { rejectWithValue }) => {
    try {
      const res = await Api.delete(`/blog/${BlogId}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// <--------- Initial State--------->
const initialState = {
  blogs: [],
  currentBlog: null,
  loading: false,
  error: null,
};
// <--------- Slice --------->
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // <--------- Fetch All Blogs --------->
    builder.addCase(fetchBlogs.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.blogs = action.payload;
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // <--------- Fetch One Blog --------->
    builder.addCase(fetchBlogById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchBlogById.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentBlog = action.payload;
    });
    builder.addCase(fetchBlogById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // <--------- Create New Blog --------->
    builder.addCase(createBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createBlog.fulfilled, (state, action) => {
      // console.log("success", current(state));
      state.loading = false;
      state.error = null;
      state.blogs = [...current(state).blogs.data, action.payload];
    });
    builder.addCase(createBlog.rejected, (state, action) => {
      state.loading = false;
      // add error map
      // state.error = action.payload;

      if (action.payload && Array.isArray(action.payload.error)) {
        action.payload.error.map((err) => toast.error(err.message));
      } else if (action.payload && action.payload.error) {
        state.error = action.payload;
      } else {
        state.error = "Something went wrong!";
      }
    });

    // <--------- Update Blog --------->
    builder.addCase(updateBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      const updatedBlogIndex = initialState.blogs.findIndex(
        (blog) => blog.id === action.payload.updatedBlog.id
      );
      if (updatedBlogIndex !== -1) {
        initialState.blogs[updatedBlogIndex] = action.payload.updatedBlog;
      }
    });
    builder.addCase(updateBlog.rejected, (state, action) => {
      state.loading = false;
      // state.error = action.payload;

      if (action.payload && Array.isArray(action.payload.error)) {
        action.payload.error.map((err) => toast.error(err.message));
      } else if (action.payload && action.payload.error) {
        state.error = action.payload;
      } else {
        state.error = "Something went wrong!";
      }
    });

    // <--------- Delete Blog --------->
    builder.addCase(deleteBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.blogs = state.blogs.data.filter(
        (blog) => blog._id !== action.payload.deletedId
      );
    });
    builder.addCase(deleteBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default blogSlice.reducer;

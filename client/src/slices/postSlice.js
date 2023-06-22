import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



// Create the async thunk for creating a new post
export const createPost = createAsyncThunk(
  'post/createPost',
  async ({ title, description, image }) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append("owner",owner);
    formData.append("createdAt", createdAt);

    const response = await axios.post('/newpost', formData);
    return response.data;
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;



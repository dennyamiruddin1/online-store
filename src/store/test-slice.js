import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
  'test/getPosts',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();
    return data;
  }
)

const testSlice = createSlice({
  name: 'test',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {
    [getPosts.pending]: (state) => {
      state.status = 'loading'
    },
    [getPosts.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.list = action.payload
      state.status = 'success'
    },
    [getPosts.rejected]: (state) => {
      state.status = 'failed'
    }
  }
});

export default testSlice;
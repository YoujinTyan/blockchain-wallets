import { createSlice } from "@reduxjs/toolkit";


export const postReducer = createSlice({
    name: 'postList',
    initialState: {
        posts: [],
    },
    reducers: {
        setPosts: (state, action) => {
            // console.log('action in reducer:', action.payload);
            // привести к нижнему регистру
            state.posts = action.payload;
        },
    },
});

export const { setPosts } = postReducer.actions;
export default postReducer.reducer;

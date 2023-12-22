import { createSlice } from "@reduxjs/toolkit";


export const postReducer = createSlice({
    name: 'postList',
    initialState: {
        posts: [],
        notFound: false,
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },

        setNotFound: (state, action) => {
            state.notFound = action.payload;
        },
    },
});

export const { setPosts, setNotFound } = postReducer.actions;
export default postReducer.reducer;

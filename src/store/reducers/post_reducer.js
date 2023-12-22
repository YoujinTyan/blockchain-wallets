import { createSlice } from "@reduxjs/toolkit";


export const postReducer = createSlice({
    name: 'postList',
    initialState: {
        posts: [
          // {
          //   body: "template body",
          //   id: 2,
          //   title: "template header",
          //   userId: 1,
          // }
        ],
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

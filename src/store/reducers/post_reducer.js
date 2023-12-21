import { createSlice } from "@reduxjs/toolkit";


export const postReducer = createSlice({
    name: 'postList',
    initialState: {
        posts: [],
        searching: { turnOn: false, notFound: false }, // turnOn - использовали ли поиск, foundData - нашли ли посты
    },
    reducers: {
        setPosts: (state, action) => {
            // console.log('action in reducer:', action.payload);
            // привести к нижнему регистру
            state.posts = action.payload;
        },

        changeSearchingState: (state, action) => {
            state.searching = action.payload;
        },
    },
});

export const { setPosts, changeSearchingState } = postReducer.actions;
export default postReducer.reducer;

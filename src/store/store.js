import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/post_reducer";


export const store = configureStore({
    reducer: {
        postList: postReducer,
    },
});

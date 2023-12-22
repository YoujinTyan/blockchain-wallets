import { configureStore } from "@reduxjs/toolkit";

import postReducer from "./reducers/post_reducer";
import settingsReducer from "./reducers/settings_reducer";


export const store = configureStore({
    reducer: {
        postList: postReducer,
        settings: settingsReducer,
    },
});

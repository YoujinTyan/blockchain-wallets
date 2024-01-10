import { createSlice } from "@reduxjs/toolkit";
import { SETTINGS_STORE_CONSTANTS as VARS } from "../../utils/constants";


export const settingsReducer = createSlice({
  name: 'settings',
  initialState: {
    cardanoMode: VARS.CARDANO_OFF,
    theme: VARS.LIGHT,
    fontFamily: VARS.FONT_ROBOTO,
    fontSize: VARS.FONT_SIZE_NORMAL,
    countPostsPerPage: VARS.POSTS_COUNT_MEDIUM,
  },

  reducers: {
    setCardanoMode: (state, action) => {
      state.cardanoMode = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setFontFamily: (state, action) => {
      state.fontFamily = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;

    },
    setCountPostsPerPage: (state, action) => {
      state.countPostsPerPage = action.payload;
    },

  },
});

export const {
  setCardanoMode,
  setTheme,
  setFontFamily,
  setFontSize,
  setCountPostsPerPage
} = settingsReducer.actions;
export default settingsReducer.reducer;

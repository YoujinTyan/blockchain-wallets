import { createSlice } from "@reduxjs/toolkit";


export const settingsReducer = createSlice({
  name: 'settings',
  initialState: {
    cardanoMode: false,
    theme: 'light',
    fontFamily: 'Roboto',
    fontSize: 'normal',
    countPostsPerPage: 5,
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
      if (action.payload === 'крупный') {
        state.fontSize = 'big';
      } else if (action.payload === 'нормальный') {
        state.fontSize = 'normal';
      } else if (action.payload === 'мелкий') {
        state.fontSize = 'small';
      }

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

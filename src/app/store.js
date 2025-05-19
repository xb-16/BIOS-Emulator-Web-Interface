import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./tabSlice.js";
import popupReducer from "./popupSlice.js";
import descriptionReducer from "./descriptionSlice.js";
import helpReducer from "./helpSlice.js";
import choicesReducer from "./choicesSlice.js";
import itemsReducer from "./ItemsSlice.js";
import subMenuReducer from "./subMenuSlice.js";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    popup: popupReducer,
    description: descriptionReducer,
    help: helpReducer,
    choices: choicesReducer,
    items: itemsReducer,
    subMenu: subMenuReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ disable check
    }),
});

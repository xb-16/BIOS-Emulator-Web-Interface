// navigationActions.js
import { createAction } from "@reduxjs/toolkit";

export const navigationUpdate = createAction('navigation/update', (actual, description) => ({
  payload: { actual, description }
}));
import { combineReducers } from "@reduxjs/toolkit";
import { tikTokApi } from "entities/tik-tok";

export const rootReducer = combineReducers({
	[tikTokApi.reducerPath]: tikTokApi.reducer,
});

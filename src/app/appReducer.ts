import { combineReducers } from "@reduxjs/toolkit";
import { feedApi } from "entities/feed";
import { userApi } from "entities/user";

export const rootReducer = combineReducers({
	[feedApi.reducerPath]: feedApi.reducer,
	[userApi.reducerPath]: userApi.reducer,
});

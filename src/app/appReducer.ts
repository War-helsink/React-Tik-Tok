import { combineReducers } from "@reduxjs/toolkit";
import { feedApi } from "entities/feed";
import { userApi } from "entities/user";
import { userVideosApi } from "entities/user-videos";

export const rootReducer = combineReducers({
	[feedApi.reducerPath]: feedApi.reducer,
	[userApi.reducerPath]: userApi.reducer,
	[userVideosApi.reducerPath]: userVideosApi.reducer,
});

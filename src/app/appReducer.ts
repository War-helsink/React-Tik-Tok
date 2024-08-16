import { combineReducers } from "@reduxjs/toolkit";
import { feedApi } from "entities/feed";
import { userApi } from "entities/user";
import { videoApi } from "entities/video";
import { commentApi } from "entities/comment";

export const rootReducer = combineReducers({
	[feedApi.reducerPath]: feedApi.reducer,
	[userApi.reducerPath]: userApi.reducer,
	[videoApi.reducerPath]: videoApi.reducer,
	[commentApi.reducerPath]: commentApi.reducer,
});

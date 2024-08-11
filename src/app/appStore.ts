import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { feedApi } from "entities/feed";
import { userApi } from "entities/user";
import { userVideosApi } from "entities/user-videos";

import { rootReducer } from "./appReducer";

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			feedApi.middleware,
			userApi.middleware,
			userVideosApi.middleware,
		),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

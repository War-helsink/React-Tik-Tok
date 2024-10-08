import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
	UserResponse,
	UserVideosResponse,
	UserParams,
	UserVideosParams,
} from "../model";

const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const BASE_URL = `https://${RAPIDAPI_HOST}/`;

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getUser: builder.query<UserResponse, UserParams>({
			query: (params) => {
				const { uniqueId } = params || {};
				return {
					url: "/user/info",
					params: {
						unique_id: uniqueId,
					},
					headers: {
						"x-rapidapi-key": RAPIDAPI_KEY,
						"x-rapidapi-host": RAPIDAPI_HOST,
					},
				};
			},
		}),

		getUserVideos: builder.query<UserVideosResponse, UserVideosParams>({
			query: (params) => {
				const { uniqueId, userId, count = 10, cursor = 0 } = params || {};
				return {
					url: "/user/posts",
					params: {
						unique_id: uniqueId,
						user_id: userId,
						cursor: cursor,
						count: count,
					},
					headers: {
						"x-rapidapi-key": RAPIDAPI_KEY,
						"x-rapidapi-host": RAPIDAPI_HOST,
					},
				};
			},
		}),
	}),
});

export const { useGetUserQuery, useGetUserVideosQuery } = userApi;
